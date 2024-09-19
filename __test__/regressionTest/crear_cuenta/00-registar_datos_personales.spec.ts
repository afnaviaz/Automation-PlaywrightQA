import { test, expect } from '@playwright/test';

function getRandomString(length) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

test('test', async ({ page }) => {
  await page.goto('https://app-staging.finkargo.com.co/auth/signup');
  await page.locator('label').filter({ hasText: 'Nombre(s) *' }).click();
  await page.getByLabel('Nombre(s) *').fill('Aut');
  await page.locator('label').filter({ hasText: 'Apellido(s) *' }).click();
  await page.getByLabel('Apellido(s) *').fill('qa');
  
  // Generar correo aleatorio con el formato "naviatestXXX"
  const randomEmail = `naviatest${Math.floor(Math.random() * 1000) + 1}`;
  await page.locator('label').filter({ hasText: 'Correo corporativo *' }).click();
  await page.getByLabel('Correo corporativo *').fill(randomEmail);
  await page.getByLabel('57').click();
  await page.getByLabel('Número de celular *').fill('3183155616');
  await page.getByLabel('Contraseña *').fill('Finkargo24#');
  await page.getByLabel('Confirmación *').fill('Finkargo24#');
  await page.getByLabel('Correo corporativo *').click();
  await page.getByRole('button', { name: 'Siguiente' }).click();
  await page.getByRole('button', { name: '​', exact: true }).click();
  await page.getByRole('option', { name: 'COLOMBIA' }).click();
  await page.getByLabel('NIT *').click();
  await page.getByLabel('NIT *').fill('82963258');
  await page.getByLabel('Nombre empresa *').click();
  await page.getByLabel('Nombre empresa *').fill('Automation QA');
  await page.getByLabel('Cargo dentro de la empresa *').click();
  await page.getByRole('option', { name: 'FINANCIERO' }).click();
  await page.getByLabel('Asesor de Finkargo que te').click();
  await page.getByRole('option', { name: '3754d77ece958a0b3328aa323cca80fe' }).click();
  await page.locator('input[name="terms_of_service"]').check();
  await page.locator('input[name="other_conditions"]').check();
  await page.getByRole('button', { name: 'Siguiente' }).click();
  await page.getByRole('button', { name: 'Enviar código' }).click();
});
