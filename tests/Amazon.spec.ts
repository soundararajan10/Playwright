import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByPlaceholder('Search Amazon.in');
  await page.keyboard.press('Enter');
  await page.getByPlaceholder('Search Amazon.in').fill('android phone');
  await page.keyboard.press('Enter');
  await page.locator("img[data-image-index='1']").click();
  await page.getByPlaceholder('Search Amazon.in').fill('decor');
  await page.keyboard.press('Enter');
  await page.locator("img[data-image-index='1']").click();
  await page.pause();
}); 