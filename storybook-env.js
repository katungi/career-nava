const dotenv = require('dotenv');
const { execSync } = require('node:child_process');

// Load environment variables from .env
dotenv.config();

// Run Storybook's build command
execSync('pnpm run build-storybook', { stdio: 'inherit' });
