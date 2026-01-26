import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://e-commerce-dev.betterbytesvn.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/E-commerce site for automation testing/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://e-commerce-dev.betterbytesvn.com/');

  // Click vào menu "My account"
  await page.getByRole('link', { name: 'My account' }).click();

  // Verify heading chứa text "My account" xuất hiện
  await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible();
});
