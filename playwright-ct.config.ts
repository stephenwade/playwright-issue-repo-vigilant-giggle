import { defineConfig, devices } from '@playwright/experimental-ct-react';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: 'tests',

  use: {
    ctTemplateDir: 'tests',
    ctViteConfig: {
      resolve: {
        // Match "paths" in tsconfig.json
        alias: {
          '~': '/app',
        },
      },
    },
  },

  projects: [
    {
      name: 'chrome',
      use: devices['Desktop Chrome'],
    },
  ],
});
