import { test, expect } from '@playwright/test';

// Recorded using command: [npx playwright codegen saucedemo.com]; tested successfully using command: [npx playwright test ./tests/record1_demo.spec.js --project firefox --headed]

test('record demo test', async ({ page }) => {

  // Go to https://www.saucedemo.com/
  await page.goto('https://www.saucedemo.com/');

  // Click [data-test="username"]
  await page.locator('[data-test="username"]').click();

  // Fill [data-test="username"]
  await page.locator('[data-test="username"]').fill('standard_user');

  // Click [data-test="password"]
  await page.locator('[data-test="password"]').click();

  // Fill [data-test="password"]
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Click [data-test="login-button"]
  await page.locator('[data-test="login-button"]').click();

  // Click text=Open Menu
  await page.getByRole('button', { name: 'Open Menu' }).click();

  //Click text=Logout
  await page.getByRole('link', { name: 'Logout' }).click();

});