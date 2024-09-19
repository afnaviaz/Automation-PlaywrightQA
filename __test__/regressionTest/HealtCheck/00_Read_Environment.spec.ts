import { test, expect } from '@playwright/test';

test('Load Staging Environment', async ({ page }) => {
  await page.goto('https://app-staging.finkargo.com.co/auth/signup');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/🇨🇴 Finkargo App Colombia/);
});

