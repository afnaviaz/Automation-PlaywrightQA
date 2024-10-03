import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app-testing.finkargo.com.co/');
  await page.goto('https://app-testing.finkargo.com.co/auth/login');
  await page.getByLabel('Usuario *').click();
  await page.getByLabel('Usuario *').fill('miguel@yopmail.com');
  await page.locator('label').filter({ hasText: 'Contraseña *' }).click();
  await page.getByLabel('Contraseña *').fill('Finkargo2024#');
  await page.getByRole('button', { name: 'Ingresar' }).click();
  await page.getByRole('button', { name: 'Finalizar solicitud' }).click();
  await page.getByRole('button', { name: 'Siguiente' }).click();
  //await page.getByRole('button', { name: 'Siguiente' }).click();
  await page.goto('https://app-testing.finkargo.com.co/credit-line/3487/2408/890900081?step=3&sub_step=2');
  await page.getByLabel('Nombres *').click();
  await page.getByLabel('Nombres *').fill('usuario');
  await page.getByLabel('Nombres *').press('Tab');
  await page.getByLabel('Apellidos *').fill('nuevo');
  await page.getByLabel('Género *').click();
  await page.getByRole('option', { name: 'Hombre' }).click();
  await page.getByLabel('Tipo de identificación *').click();
  await page.getByRole('option', { name: 'CEDULA DE EXTRANJERIA' }).click();
  await page.getByLabel('Número de identificación *').click();
  await page.getByLabel('Número de identificación *').fill('10517692');
  await page.getByPlaceholder('DD-MM-YYYY').click();
  await page.getByPlaceholder('DD-MM-YYYY').fill('09-sep-1981');
  await page.getByLabel('País de nacimiento *').click();
  await page.getByRole('combobox', { name: 'País de nacimiento *' }).fill('colo');
  await page.getByRole('listbox', { name: 'País de nacimiento *' }).click();
  await page.getByLabel('Dirección *').click();
  await page.getByLabel('Dirección *').fill('avenida 68');
  await page.getByLabel('Ciudad *').click();
  await page.getByRole('option', { name: 'BOGOTÁ' }).click();
  await page.getByLabel('Número de celular *').click();
  await page.getByLabel('Número de celular *').fill('3007226523');
  await page.getByLabel('Correo electrónico *').click();
  await page.getByLabel('Correo electrónico *').click();
  await page.getByLabel('Correo electrónico *').fill('usuario@yopmail.com');
  await page.getByLabel('Persona expuesta públicamente').check();
  await page.getByLabel('¿ Tiene participación').check();
  await page.getByLabel('Part.Accionaria *').click();
  await page.getByLabel('Part.Accionaria *').fill('70');


  /*
  
  await page.goto('https://app-testing.finkargo.com.co/credit-line/3486/2407/890803029?step=2');
  await page.getByLabel('Ciudad *').click();
  await page.getByRole('option', { name: 'BOGOTÁ' }).click();
  await page.getByRole('button', { name: 'Siguiente' }).click();
  
  await page.getByRole('button', { name: 'Siguiente' }).click();
 
  
  
 
*/
});
