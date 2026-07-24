/**
 * Custom build script for debugging VuePress build failures.
 * Captures ALL output including stderr.
 */
const { execSync } = require('child_process');

process.env.NODE_OPTIONS = '--openssl-legacy-provider';

console.log('=== Starting VuePress build (wrapped) ===');
console.log('Node:', process.version);
console.log('CWD:', process.cwd());
console.log('');

try {
  const output = execSync('npx vuepress build docs', {
    stdio: 'pipe',
    env: { ...process.env, NODE_OPTIONS: '--openssl-legacy-provider' },
    timeout: 300000,
    maxBuffer: 10 * 1024 * 1024
  });
  console.log('=== STDOUT ===');
  console.log(output.toString());
  console.log('=== BUILD SUCCESSFUL ===');
  process.exit(0);
} catch (err) {
  console.error('=== BUILD FAILED ===');
  console.error('Exit code:', err.status);
  console.error('Signal:', err.signal);
  console.error('');
  if (err.stdout) {
    console.error('=== STDOUT ===');
    console.error(err.stdout.toString());
    console.error('');
  }
  if (err.stderr) {
    console.error('=== STDERR ===');
    console.error(err.stderr.toString());
    console.error('');
  }
  console.error('Error:', err.message);
  process.exit(1);
}
