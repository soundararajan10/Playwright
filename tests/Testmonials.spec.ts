import { chromium,test, expect,Page } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://ultimateqa.com/automation/');
  await page.locator('#menu-home-page-menu').getByRole('link', { name: 'Professional Services' }).click();
  await page.goBack();
  await page.getByRole('link', { name: 'Blog' }).click();
  await page.goBack();
  await page.getByRole('link', { name: 'Success Stories' }).click();
  //await page.locator('video').first().textContent();
   //await page.getByLabel('Close').click();
  //await page.goto('https://ultimateqa.com/testimonials/');
  console.log(await page.locator("a[href='https://courses.ultimateqa.com/enroll/808620?et=free_trial']").textContent());
  //await page.goto('https://ultimateqa.com/automation/');
  await page.pause();
});
