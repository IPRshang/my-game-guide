/**
 * Custom build wrapper — catches VuePress build errors with full stack trace
 */
process.env.NODE_OPTIONS = '--openssl-legacy-provider';

const { createApp, dev } = require('vuepress');

async function build() {
  try {
    const app = createApp({
      sourceDir: 'docs',
      temp: 'node_modules/.temp'
    });

    console.log('=== Starting VuePress build ===');
    const result = await app.build();
    console.log('=== Build successful! ===');
    process.exit(0);
  } catch (err) {
    console.error('=== BUILD FAILED ===');
    console.error('Error name:', err.name);
    console.error('Error message:', err.message);
    console.error('Stack trace:');
    console.error(err.stack);
    process.exit(1);
  }
}

build();
