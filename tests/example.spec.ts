import { test, expect } from '@playwright/test';

test('Test Multiplcation is cool', async ({ page }) => {
  await page.goto('http://localhost:55021/');
  await page.getByRole('textbox', { name: 'First Number' }).click();
  await expect(page.getByRole('link', { name: 'WebVI.Calculator' })).toBeVisible();
  await page.getByRole('textbox', { name: 'First Number' }).fill('500');
  await page.getByRole('textbox', { name: 'First Number' }).press('Tab');
  await page.getByRole('textbox', { name: 'Second Number' }).fill('50');
  await page.getByRole('textbox', { name: 'Second Number' }).press('Tab');
  await page.getByLabel('Operation').press('Tab');
  await page.getByRole('button', { name: 'Calculate' }).press('Enter');
  await expect(page.getByRole('main')).toContainText('Result: 550');
});

test('test Cannot divide by zero', async ({ page }) => {
  await page.goto('http://localhost:55021/');
  await expect(page.getByRole('link', { name: 'WebVI.Calculator' })).toBeVisible();
  await page.getByRole('textbox', { name: 'First Number' }).click();
  await page.getByRole('textbox', { name: 'First Number' }).fill('500');
  await page.getByRole('textbox', { name: 'First Number' }).press('Tab');
  await page.getByRole('textbox', { name: 'Second Number' }).fill('0');
  await page.getByLabel('Operation').selectOption('3');
  await page.getByRole('button', { name: 'Calculate' }).click();
  await page.locator('form').getByText('Cannot divide by zero.').click();
  await expect(page.locator('form')).toContainText('Cannot divide by zero.');
});

test('test Subtraction', async ({ page }) => {
  await page.goto('http://localhost:55021/');
  await expect(page.getByRole('link', { name: 'WebVI.Calculator' })).toBeVisible();
  await page.getByRole('textbox', { name: 'First Number' }).click();
  await page.getByRole('textbox', { name: 'First Number' }).fill('1000');
  await page.getByRole('textbox', { name: 'First Number' }).press('Tab');
  await page.getByRole('textbox', { name: 'Second Number' }).fill('500');
  await page.getByLabel('Operation').selectOption('1');
  await page.getByRole('button', { name: 'Calculate' }).click();
  await expect(page.getByRole('main')).toContainText('Result: 500');
});

test('test lots w/ fail', async ({ page }) => {
  await page.goto('http://localhost:55021/');
  await expect(page.getByRole('link', { name: 'WebVI.Calculator' })).toBeVisible();
  await page.getByRole('link', { name: 'Calculator', exact: true }).click();
  await expect(page.getByRole('link', { name: 'WebVI.Calculator' })).toBeVisible();
  await page.getByRole('textbox', { name: 'First Number' }).click();
  await page.getByRole('textbox', { name: 'First Number' }).fill('1');
  await page.getByRole('textbox', { name: 'First Number' }).press('Tab');
  await page.getByRole('textbox', { name: 'Second Number' }).fill('2');
  await page.getByRole('textbox', { name: 'Second Number' }).press('Tab');
  await page.getByLabel('Operation').selectOption('2');
  await page.getByRole('button', { name: 'Calculate' }).click();
  await expect(page.getByRole('textbox', { name: 'First Number' })).toHaveValue('1');
  await expect(page.getByRole('textbox', { name: 'Second Number' })).toHaveValue('2');
  await expect(page.getByLabel('Operation')).toHaveValue('2');
  await expect(page.getByRole('main')).toContainText('Result: 3');
});
