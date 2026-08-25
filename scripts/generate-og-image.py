#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
生成 1200x630 的 Open Graph 分享图。
风格：深色科技/游戏感，真实反映当前站点四游戏主题，避免误导性内容。
"""
import os
import sys
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_PNG = os.path.join(ROOT, "docs", ".vuepress", "public", "images", "og-image-v3.png")
OUT_SVG = os.path.join(ROOT, "docs", ".vuepress", "public", "images", "og-image-v3.svg")

WIDTH, HEIGHT = 1200, 630


def find_font(preferred):
    """在 Windows 常见字体路径中找一个可用的 TTF/TTC。"""
    candidates = []
    if preferred == "zh":
        candidates = [
            "C:/Windows/Fonts/msyh.ttc",
            "C:/Windows/Fonts/msyhbd.ttc",
            "C:/Windows/Fonts/simhei.ttf",
            "C:/Windows/Fonts/simsun.ttc",
        ]
    else:
        candidates = [
            "C:/Windows/Fonts/segoeuib.ttf",
            "C:/Windows/Fonts/arialbd.ttf",
            "C:/Windows/Fonts/arial.ttf",
            "C:/Windows/Fonts/calibrib.ttf",
            "C:/Windows/Fonts/tahomabd.ttf",
            "C:/Windows/Fonts/verdanab.ttf",
        ]
    for path in candidates:
        if os.path.exists(path):
            return path
    return None


def hex_to_rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))


def interpolate(c1, c2, factor):
    return tuple(int(c1[i] + (c2[i] - c1[i]) * factor) for i in range(3))


def draw_gradient(draw, width, height, stops):
    """从上到下（y 轴）的线性渐变。stops: [(offset, color), ...]"""
    for y in range(height):
        t = y / height
        # 找到当前 t 所在区间
        for i in range(len(stops) - 1):
            s0, c0 = stops[i]
            s1, c1 = stops[i + 1]
            if s0 <= t <= s1:
                local_t = (t - s0) / (s1 - s0) if s1 != s0 else 0
                color = interpolate(c0, c1, local_t)
                draw.line([(0, y), (width, y)], fill=color)
                break


def main():
    # 创建画布
    img = Image.new("RGB", (WIDTH, HEIGHT), color=(15, 23, 42))
    draw = ImageDraw.Draw(img)

    # 深蓝 -> 靛蓝 -> 暗紫 渐变
    draw_gradient(draw, WIDTH, HEIGHT, [
        (0.0, hex_to_rgb("#0f172a")),
        (0.45, hex_to_rgb("#1e1b4b")),
        (0.75, hex_to_rgb("#312e81")),
        (1.0, hex_to_rgb("#111827")),
    ])

    # 顶部装饰条：品牌 accent 渐变（洋红-橙）
    bar = Image.new("RGB", (WIDTH, 8), color=(0, 0, 0))
    bar_draw = ImageDraw.Draw(bar)
    for x in range(WIDTH):
        t = x / WIDTH
        r = int(233 + (245 - 233) * t)
        g = int(69 + (166 - 69) * t)
        b = int(96 + (35 - 96) * t)
        bar_draw.line([(x, 0), (x, 8)], fill=(r, g, b))
    img.paste(bar, (0, 0))

    # 加载字体
    font_zh_bold = find_font("zh")
    font_en_bold = find_font("en")
    font_en_regular = font_en_bold.replace("bd", "") if font_en_bold and "bd" in font_en_bold else font_en_bold

    # 字号
    title_size = 82
    subtitle_size = 34
    tag_size = 28
    url_size = 24

    try:
        title_font = ImageFont.truetype(font_en_bold, title_size)
    except Exception:
        title_font = ImageFont.load_default()
    try:
        subtitle_font = ImageFont.truetype(font_en_regular, subtitle_size)
    except Exception:
        subtitle_font = ImageFont.load_default()
    try:
        tag_font = ImageFont.truetype(font_en_bold, tag_size)
    except Exception:
        tag_font = ImageFont.load_default()
    try:
        url_font = ImageFont.truetype(font_en_regular, url_size)
    except Exception:
        url_font = ImageFont.load_default()

    # 文字内容（英文为主，社媒通用）
    title = "ggexplore.com"
    subtitle = "GTA 6 · Arknights: Endfield · Neverness to Everness · Ananta"
    tags = "Guides · Codes · Tier Lists · Maps · Leaks & Updates"
    url_text = "Open-world game guides in EN / ZH / ES"

    # 标题尺寸与居中
    bbox = draw.textbbox((0, 0), title, font=title_font)
    title_w = bbox[2] - bbox[0]
    title_h = bbox[3] - bbox[1]
    title_x = (WIDTH - title_w) // 2
    title_y = 160

    # 标题投影（深色偏移 3px）
    draw.text((title_x + 3, title_y + 3), title, font=title_font, fill=(0, 0, 0, 128))
    draw.text((title_x, title_y), title, font=title_font, fill=(255, 255, 255))

    # 副标题
    bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
    sub_w = bbox[2] - bbox[0]
    sub_x = (WIDTH - sub_w) // 2
    sub_y = title_y + title_h + 45
    draw.text((sub_x, sub_y), subtitle, font=subtitle_font, fill=(203, 213, 225))

    # 标签行（accent 青色）
    bbox = draw.textbbox((0, 0), tags, font=tag_font)
    tag_w = bbox[2] - bbox[0]
    tag_x = (WIDTH - tag_w) // 2
    tag_y = sub_y + 60
    draw.text((tag_x, tag_y), tags, font=tag_font, fill=(125, 211, 252))

    # 分隔线
    line_y = tag_y + 65
    draw.line([(350, line_y), (WIDTH - 350, line_y)], fill=(75, 85, 99), width=2)

    # 底部网址/三语说明
    bbox = draw.textbbox((0, 0), url_text, font=url_font)
    url_w = bbox[2] - bbox[0]
    url_x = (WIDTH - url_w) // 2
    url_y = line_y + 30
    draw.text((url_x, url_y), url_text, font=url_font, fill=(156, 163, 175))

    # 保存 PNG
    os.makedirs(os.path.dirname(OUT_PNG), exist_ok=True)
    img.save(OUT_PNG, "PNG")
    print(f"Saved OG PNG: {OUT_PNG}")

    # 同步生成新的 SVG（结构简单，保持真实）
    svg = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="{WIDTH}" height="{HEIGHT}" viewBox="0 0 {WIDTH} {HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="45%" style="stop-color:#1e1b4b"/>
      <stop offset="75%" style="stop-color:#312e81"/>
      <stop offset="100%" style="stop-color:#111827"/>
    </linearGradient>
    <linearGradient id="bar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#e94560"/>
      <stop offset="100%" style="stop-color:#f5a623"/>
    </linearGradient>
  </defs>
  <rect width="{WIDTH}" height="{HEIGHT}" fill="url(#bg)"/>
  <rect width="{WIDTH}" height="8" fill="url(#bar)"/>
  <text x="{WIDTH // 2}" y="240" text-anchor="middle" font-family="Arial, sans-serif" font-size="82" font-weight="bold" fill="#ffffff">ggexplore.com</text>
  <text x="{WIDTH // 2}" y="330" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" fill="#cbd5e1">GTA 6 · Arknights: Endfield · Neverness to Everness · Ananta</text>
  <text x="{WIDTH // 2}" y="400" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="#7dd3fc">Guides · Codes · Tier Lists · Maps · Leaks &amp; Updates</text>
  <line x1="350" y1="470" x2="{WIDTH - 350}" y2="470" stroke="#4b5563" stroke-width="2"/>
  <text x="{WIDTH // 2}" y="510" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="#9ca3af">Open-world game guides in EN / ZH / ES</text>
</svg>
'''
    with open(OUT_SVG, "w", encoding="utf-8") as f:
        f.write(svg)
    print(f"Saved OG SVG: {OUT_SVG}")


if __name__ == "__main__":
    main()
