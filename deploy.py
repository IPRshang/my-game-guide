#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
deploy.py — 一次构建，双端发布
  1) npm run docs:build  →  产出 docs/.vuepress/dist
  2) 推送到 GitHub (main)  →  GitHub Pages（海外线路，Google 抓取顺畅）
  3) 同步 dist 到腾讯云 COS + CDN（国内线路，百度抓取秒回）

内容同源：国内外返回完全相同的页面，不构成 cloaking / 重复内容。
canonical 已统一为 https://ggexplore.com/（见 config.js）。

用法：
  python deploy.py                 # 构建 + 推 GitHub + 同步 COS
  python deploy.py --no-build     # 跳过构建（已手动 build 过）
  python deploy.py --no-github    # 只同步 COS（不改 GitHub）
  python deploy.py --purge        # 同步后删除 COS 中本地已不存在的文件

密钥放 .env（不要提交）：
  TENCENT_SECRET_ID=xxx
  TENCENT_SECRET_KEY=yyy
  COS_REGION=ap-guangzhou
  COS_BUCKET=my-bucket-1250000000
（其余可选：DIST_DIR、SKIP_BUILD、SKIP_GITHUB、PURGE）
"""
import subprocess, os, sys, time, argparse

PROJECT = os.path.dirname(os.path.abspath(__file__))
os.chdir(PROJECT)

# ---------- 读取 .env ----------
def load_env(path=".env"):
    if not os.path.exists(path):
        return
    with open(path, encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            k, v = line.split("=", 1)
            os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))

load_env()

# ---------- 参数 ----------
ap = argparse.ArgumentParser()
ap.add_argument("--no-build", action="store_true")
ap.add_argument("--no-github", action="store_true")
ap.add_argument("--purge", action="store_true")
args = ap.parse_args()

SKIP_BUILD = args.no_build or os.environ.get("SKIP_BUILD") == "1"
SKIP_GITHUB = args.no_github or os.environ.get("SKIP_GITHUB") == "1"
PURGE = args.purge or os.environ.get("PURGE") == "1"
DIST_DIR = os.environ.get("DIST_DIR", os.path.join("docs", ".vuepress", "dist"))

# ---------- 1) 构建 ----------
if not SKIP_BUILD:
    print("==> [1/3] 构建站点 (npm run docs:build)")
    r = subprocess.run(["npm", "run", "docs:build"], timeout=600)
    if r.returncode != 0:
        print("构建失败，终止。")
        sys.exit(1)
    if not os.path.isdir(DIST_DIR):
        print(f"构建产物不存在：{DIST_DIR}，终止。")
        sys.exit(1)

# ---------- 2) 推送 GitHub（海外线路） ----------
if not SKIP_GITHUB:
    print("==> [2/3] 推送 GitHub (main)")
    msg = "deploy: update site " + time.strftime("%Y-%m-%d %H:%M")
    subprocess.run(["git", "add", "-A"], capture_output=True, timeout=10)
    subprocess.run(["git", "commit", "-m", msg], capture_output=True, text=True, timeout=10)
    env = os.environ.copy()
    env["GIT_SSH_COMMAND"] = "ssh -o StrictHostKeyChecking=no -o ConnectTimeout=15"
    for attempt in range(5):
        print(f"  push attempt {attempt+1}...")
        r = subprocess.run(["cmd", "/c", "git", "push", "origin", "main"],
                           capture_output=True, text=True, timeout=60, env=env)
        if r.returncode == 0:
            print("  GitHub 推送成功。")
            break
        print(f"  stderr: {(r.stderr or '').strip()[:200]}")
        time.sleep(3)
    else:
        print("  GitHub 推送失败（跳过，不影响 COS 同步）。")

# ---------- 3) 同步腾讯云 COS（国内线路） ----------
print("==> [3/3] 同步到腾讯云 COS")
SID = os.environ.get("TENCENT_SECRET_ID")
SKEY = os.environ.get("TENCENT_SECRET_KEY")
REGION = os.environ.get("COS_REGION")
BUCKET = os.environ.get("COS_BUCKET")

missing = [k for k, v in dict(SECRET_ID=SID, SECRET_KEY=SKEY, REGION=REGION, BUCKET=BUCKET).items() if not v]
if missing:
    print(f"  缺少环境变量：{', '.join(missing)}（在 .env 中配置后重试）。跳过 COS 同步。")
    sys.exit(0)

try:
    from qcloud_cos import CosConfig, CosS3Client
except ImportError:
    print("  未安装 COS SDK，请先执行：pip install cos-python-sdk-v5")
    sys.exit(0)

config = CosConfig(Region=REGION, SecretId=SID, SecretKey=SKEY)
client = CosS3Client(config)

EXT_CT = {
    ".html": "text/html; charset=utf-8",
    ".htm": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".mjs": "application/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".xml": "application/xml; charset=utf-8",
    ".txt": "text/plain; charset=utf-8",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".webp": "image/webp",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".ttf": "font/ttf",
    ".pdf": "application/pdf",
    ".mp4": "video/mp4",
    ".webm": "video/webm",
    ".ogg": "audio/ogg",
    ".mp3": "audio/mpeg",
}

def content_type(path):
    return EXT_CT.get(os.path.splitext(path)[1].lower(), "application/octet-stream")

# 收集本地文件
local = {}
for root, _, files in os.walk(DIST_DIR):
    for f in files:
        full = os.path.join(root, f)
        rel = os.path.relpath(full, DIST_DIR).replace("\\", "/")
        local[rel] = full

print(f"  本地文件数：{len(local)}")
uploaded = 0
for key, full in local.items():
    ct = content_type(key)
    try:
        client.upload_file(Bucket=BUCKET, Key=key, LocalFilePath=full,
                           EnableMD5=False, Headers={"Content-Type": ct})
        uploaded += 1
    except Exception as e:
        print(f"  上传失败 {key}: {e}")
print(f"  已上传：{uploaded}/{len(local)}")

# 可选：清理 COS 中本地已删除的文件
if PURGE:
    print("  清理远端多余文件...")
    remote, marker = [], ""
    while True:
        resp = client.list_objects(Bucket=BUCKET, Prefix="", Marker=marker, MaxKeys=1000)
        for c in resp.get("Contents", []):
            remote.append(c["Key"])
        if resp.get("IsTruncated") == "true":
            marker = resp["NextMarker"]
        else:
            break
    stale = [k for k in remote if k not in local]
    for k in stale:
        client.delete_object(Bucket=BUCKET, Key=k)
    print(f"  已删除 {len(stale)} 个过期文件。")

print("==> 完成。海外走 GitHub Pages，国内走腾讯云 CDN，内容同源。")
