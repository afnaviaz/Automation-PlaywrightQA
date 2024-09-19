import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app-staging.finkargo.com.mx/auth/login');
  await page.getByLabel('Usuario *').fill('normaneddy@yopmail.com');
  await page.getByLabel('Contraseña *').fill('Finkargo24#');
  await page.locator('.buttonClass').click();
  await page.goto('https://app-staging.finkargo.com.mx/customer/dashboard');
  await page.getByRole('button', { name: 'Cotizar operación' }).click();
  await page.getByPlaceholder('$').fill('$1000');
  await page.locator('.MuiSlider-root').first().click();
  await page.locator('[id="box-slider-\\%"] > div > div > .MuiSlider-root > .MuiSlider-rail').click();
  await page.getByRole('button', { name: 'Enviar cotización a mi correo' }).click();
  await page.getByRole('button', { name: 'Aceptar' }).click();
});

