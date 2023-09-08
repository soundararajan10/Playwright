import { chromium,test, expect,Page } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.locator('id=email').fill("rajan@gmail.com");
  await page.locator('id=pass').fill("raja123@");
  await page.locator('data-testid=royal_login_button').click();

});