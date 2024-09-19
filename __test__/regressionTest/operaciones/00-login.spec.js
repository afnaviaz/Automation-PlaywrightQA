import { test, expect } from '@playwright/test';

test('test login', async ({ page }) => {
  await page.goto('https://app-staging.finkargo.com.co/auth/login');
  await page.getByLabel('Usuario *').fill('automationfinkargonavia@yopmail.com');
  await page.getByLabel('Contraseña *').fill('Navia24#');
  await page.getByRole('button', { name: 'Ingresar' }).click();
  await page.goto('https://app-staging.finkargo.com.co/analyst/home');
});