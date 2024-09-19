import { test, expect } from '@playwright/test';

test('Buscando Solicitud de Operación', async ({ page }) => {
await page.goto('https://app-staging.finkargo.com.co/auth/login');
  await page.locator('label').filter({ hasText: 'Usuario *' }).click();
  await page.getByLabel('Usuario *').fill('4b0fc36df1050368157c74c3ed31f04e@yopmail.com');
  await page.getByLabel('Contraseña *').fill('Sistemas123@1');
  await page.getByRole('button', { name: 'Ingresar' }).click();
  await page.goto('https://app-staging.finkargo.com.co/analyst/home');
  await page.goto('https://app-staging.finkargo.com.co/analyst/operation-requests');
 
});