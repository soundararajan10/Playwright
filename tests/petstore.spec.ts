import { chromium,test, expect,Page } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://jpetstore.aspectran.com/catalog/');
  await page.locator('#QuickLinks').getByRole('link', { name: 'Fish' }).click();
  await page.getByRole('link', { name: 'FI-SW-01' }).click();
  await page.getByRole('link', { name: 'Add to Cart' }).first().click();
  await page.getByRole('link', { name: 'Proceed to Checkout' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
   await page.locator('#BackLink').click();
  await page.locator('#QuickLinks').getByRole('link', { name: 'Birds' }).click();
  const test1 = await page.getByRole('cell', { name: 'AV-CB-01' }).textContent();
  const aaa = test1?.trim();
  console.log(aaa);
  console.log(await page.getByRole('cell', { name: 'Amazon Parrot' }).textContent());
  const test2 = await page.getByRole('cell', { name: 'AV-SB-02' }).textContent();
  const bbb=test2?.trim();
  console.log(bbb);
  console.log(await page.getByRole('cell', { name: 'Finch' }).textContent())
  await expect(page).toHaveTitle(/JPetStore Demo/);
  
  await page.pause();
});
