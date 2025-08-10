import { defineConfig, devices } from '@playwright/test';

/*configure dotenv to load environment variables
from a specific .env file based on the ENV variable
default to env A if ENV is not set*/
import dotenv from 'dotenv';
import path from 'path';
const envFile = process.env.ENV ? `.env/.env.${process.env.ENV}` : '.env/.env.A';
dotenv.config({ path: path.resolve(__dirname, envFile) });


export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    //set the base URL for the tests based on the environment
    baseURL: process.env.BASE_URL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
  timeout: 60000,

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {name: 'Mobile Chrome',
      use: { ...devices['Pixel 7'],
        isMobile: true, },
    },
    {name: 'Mobile Safari',
      use: { ...devices['iPhone 15 Pro'], 
        isMobile: true, },
    },
  ],

});
