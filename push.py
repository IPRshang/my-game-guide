import subprocess, os, time

os.chdir(r'C:\Users\LP0717\my-game-guide')

# Stage
subprocess.run(['git', 'add', '-A'], capture_output=True, timeout=10)

# Commit
r = subprocess.run(['git', 'commit', '-m', 'test: GTA6-only - remove all other games, backup files, robots.txt'], 
                   capture_output=True, text=True, timeout=10)
print("Commit:", r.stdout.strip()[-300:] if r.stdout else "OK")

# Push
env = os.environ.copy()
env['GIT_SSH_COMMAND'] = 'ssh -o StrictHostKeyChecking=no -o ConnectTimeout=15'

for attempt in range(5):
    print(f"\nPush attempt {attempt+1}...")
    r = subprocess.run(['cmd', '/c', 'git', 'push', 'origin', 'main'], 
                       capture_output=True, text=True, timeout=60, env=env)
    out = r.stdout.strip() or "(empty)"
    err = r.stderr.strip() or "(empty)"
    print(f"stdout: {out[:200]}")
    print(f"stderr: {err[:200]}")
    if r.returncode == 0:
        print("SUCCESS!")
        break
    if r.returncode == 3221225477:
        print("SEGFAULT - retrying")
    time.sleep(3)
