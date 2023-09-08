import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://uat.quiklyz.com/');
  await page.locator('input[placeholder="Search Your City"]').fill('Chennai');
  await page.locator('.fg-line-form > div > div > .Chennai > div').first().click();
  // await page.getByRole('button', { name: 'Login ' }).click();
  // await page.locator('//span[text()=" Start here"]').click();
  // await page.getByRole('textbox', { name: 'First Name' }).fill('soundar');
  // await page.getByRole('textbox', { name: 'Last Name' }).fill('rajan');
  // await page.getByRole('textbox', { name: 'Email Address' }).fill('soundar857@gmail.com');
  // await page.getByRole('textbox', { name: 'Enter your Mobile Number' }).fill('7308909034');
  // await page.locator("(//span[@class='mat-checkbox-inner-container'])[1]").click();
  // await page.locator("(//span[text()='Register'])[1]").click();
  // await page.locator('(//input[@id="otpField-0"])[1]').fill('1');
  // await page.locator('(//input[@id="otpField-1"])[1]').fill('2');
  // await page.locator('(//input[@id="otpField-2"])[1]').fill('3');
  // await page.locator('(//input[@id="otpField-3"])[1]').fill('4');
  // await page.locator('(//input[@id="otpField-4"])[1]').fill('5');
  // await page.locator('(//input[@id="otpField-5"])[1]').fill('6');
  // await page.locator("//button[@class='mat-focus-indicator mat-flat-button mat-button-base mat-primary ng-star-inserted']").click();
  test.setTimeout(130000);
  await page.locator("(//a[@class='mat-focus-indicator mat-button mat-button-base ng-star-inserted'])[1]").click();
  await page.locator('.mat-slider-thumb').first().dragTo(page.locator('mat-slider:nth-child(2) > .mat-slider-wrapper > .mat-slider-ticks-container > .mat-slider-ticks'));
  await page.getByLabel('Audi (1)').check();
  await page.getByLabel('Automatic (51)').check();
  await page.getByLabel('Electric (9)').check();
  await page.locator("//span[@class='line-clamp1 make-name ng-star-inserted']").click();
   
  //await page.locator("(//span[text()=' Check my Eligibility '])[1]").click();
  await page.goBack();
  await page.locator("input[id='mat-input-35']").fill('Swift');
 // await page.locator('#mat-select-value-3').selectOption('Sort by Price Low to High');
  await page.goBack();
  //await page.getByLabel('Play', { exact: true }).click();
  await page.getByRole('button', { name: 'How it Works ' }).click();
  await page.getByRole('menuitem', { name: ' Car Subscription Process' }).click();
  await page.locator('button').filter({ hasText: 'Browse Cars' }).click();
  await page.goBack();
  console.log( await page.getByRole('link', { name: 'quiklyz.service@mahindra.com' }).textContent());
  await page.goBack();
  test.setTimeout(130000);
  await page.getByRole('link', { name: 'FAQs' }).click();
  console.log(await page.getByText('Frequently Asked Questions').textContent());
  await page.getByPlaceholder('Search your FAQ queries').fill('how is car leasing beneficial to your organisation?');
  await page.getByRole('button', { name: 'How is car leasing beneficial to your organisation?' }).click();
  console.log(await page.getByRole('button', { name: 'How is car leasing beneficial to your organisation?' }).textContent());
  await page.getByRole('button', { name: 'What exactly is Quiklyz Car Subscription?' }).click();
  console.log(await page.getByRole('button', { name: 'What exactly is Quiklyz Car Subscription?' }).textContent());
  await page.getByRole('button', { name: 'Why would I need to Quiklyz a car?' }).click();
  console.log(await page.getByRole('button', { name: 'Why would I need to Quiklyz a car?' }).textContent());
  await page.getByRole('button', { name: 'How is car leasing beneficial to your employee?' }).click();
  console.log(await page.getByRole('button', { name: 'How is car leasing beneficial to your employee?' }).textContent());
  await page.getByRole('button', { name: 'How is Quiklyz different from other self-drive and car rental services?' }).click();
  console.log(await page.getByRole('button', { name: 'How is Quiklyz different from other self-drive and car rental services?' }).textContent());
  await page.locator("//button[text()='View More']").click();
  test.setTimeout(130000);
  await page.getByRole('button', { name: 'How can quiklyz offer a complete lease solution?' }).click();
  console.log(await page.getByRole('button', { name: 'How can quiklyz offer a complete lease solution?' }).textContent());
  await page.getByRole('button', { name: 'Why should I choose Quiklyz? How are Quiklyz subscription prices compared to others?' }).click();
  console.log(await page.getByRole('button', { name: 'Why should I choose Quiklyz? How are Quiklyz subscription prices compared to others?' }).textContent());
  await page.getByRole('button', { name: 'How is Mahindra Finance Quiklyz unique?' }).click();
  console.log(await page.getByRole('button', { name: 'How is Mahindra Finance Quiklyz unique?' }).textContent());
  await page.getByRole('button', { name: 'What are the benefits of Quiklyz?' }).click();
  console.log(await page.getByRole('button', { name: 'What are the benefits of Quiklyz?' }).textContent());
  await page.getByRole('button', { name: 'How do I know if I am eligible to subscribe to a car on Quiklyz?' }).click();
  console.log(await page.getByRole('button', { name: 'How do I know if I am eligible to subscribe to a car on Quiklyz?' }).textContent());
  await page.getByRole('button', { name: 'What documents do I need to subscribe to a car on Quiklyz?' }).click();
  console.log(await page.getByRole('button', { name: 'What documents do I need to subscribe to a car on Quiklyz?' }).textContent());
  await page.getByRole('button', { name: 'What are the services included in my Quiklyz Car Subscription?' }).click();
  console.log(await page.getByRole('button', { name: 'What are the services included in my Quiklyz Car Subscription?' }).textContent());
  await page.getByRole('button', { name: 'How long will it take for Quiklyz to deliver my car to me?' }).click();
  console.log(await page.getByRole('button', { name: 'How long will it take for Quiklyz to deliver my car to me?' }).textContent());
  await page.getByRole('button', { name: 'Do I need to be physically present for taking the delivery of the car?' }).click();
  console.log(await page.getByRole('button', { name: 'Do I need to be physically present for taking the delivery of the car?' }).textContent());
  await page.getByRole('button', { name: 'Will Quiklyz manage my cars service and maintenance?' }).click();
  console.log(await page.getByRole('button', { name: 'Will Quiklyz manage my cars service and maintenance?' }).textContent());
  await page.getByRole('button', { name: 'Will Quiklyz manage my car\'s Insurance?' }).click();
  console.log(await page.getByRole('button', { name: 'Will Quiklyz manage my car\'s Insurance?' }).textContent());
  await page.getByRole('button', { name: 'What all will be covered in my Insurance?' }).click();
  console.log(await page.getByRole('button', { name: 'What all will be covered in my Insurance?' }).textContent());
  await page.getByRole('button', { name: 'Can I get a stand-by or replacement car on Quiklyz in case my car is off-road due to accidental damage or maintenance?' }).click();
  console.log(await page.getByRole('button', { name: 'Can I get a stand-by or replacement car on Quiklyz in case my car is off-road due to accidental damage or maintenance?' }).textContent());
  await page.getByRole('button', { name: 'Can I subscribe to a used car on Quiklyz?' }).click();
  console.log(await page.getByRole('button', { name: 'Can I subscribe to a used car on Quiklyz?' }).textContent());
  await page.getByRole('button', { name: 'How is car subscription different from car leasing?' }).click();
  console.log(await page.getByRole('button', { name: 'How is car subscription different from car leasing?' }).textContent());
  await page.getByRole('button', { name: 'Why does my agreement have \'Lease/ Leasing\' mentioned, instead of Subscription?' }).click();
  console.log(await page.getByRole('button', { name: 'Why does my agreement have \'Lease/ Leasing\' mentioned, instead of Subscription?' }).textContent());
  await page.getByRole('button', { name: 'How should I inform you of any changes in my contact details?' }).click();
  console.log(await page.getByRole('button', { name: 'How should I inform you of any changes in my contact details?' }).textContent());
  await page.getByRole('button', { name: 'View Less' }).click();
  await page.getByText('Expand All').click();
  test.setTimeout(130000);
  await page.getByRole('tab', { name: 'Fees and Tenure' }).click();
  await page.getByText('Expand All').click();
  await page.getByText('Minimize All').click();
  await page.getByRole('tab', { name: 'Payments' }).click();
  await page.getByText('Expand All').click();
  await page.getByText('Minimize All').click();
  await page.getByText('About Car').click();
  await page.getByText('Expand All').click();
  await page.getByText('Minimize All').click();
  await page.getByText('Booking and Registration').click();
  await page.getByText('Expand All').click();
  await page.getByText('Minimize All').click();
  await page.getByText('Service and Maintenance').click();
  await page.getByText('Expand All').click();
  await page.getByText('Minimize All').click();
  await page.getByText('Guidelines').click();
  await page.getByText('Expand All').click();
  await page.getByText('Minimize All').click();
  await page.getByText('Assured Buyback').click();
  await page.getByText('Expand All').click();
  await page.getByText('Minimize All').click();



  await page.pause();
});