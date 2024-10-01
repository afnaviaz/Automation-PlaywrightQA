import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {


  await page.goto('https://app-staging.finkargo.com.co/');
  await page.goto('https://app-staging.finkargo.com.co/auth/login');
  await page.locator('label').filter({ hasText: 'Usuario *' }).click();
  await page.getByLabel('Usuario *').fill('miguel@yopmail.com');
  await page.locator('label').filter({ hasText: 'Contraseña *' }).click();
  await page.getByLabel('Contraseña *').fill('Finkargo2024#');
  await page.getByRole('button', { name: 'Ingresar' }).click();
  await page.waitForTimeout(8000);
  await page.waitForSelector('span:has-text("Finalizar solicitud")', { timeout: 10000 });
  await page.getByRole('button', { name: 'Finalizar solicitud' }).click();
  await page.waitForTimeout(4000);
  const currentURL =  page.url();
  if (currentURL === 'https://app-staging.finkargo.com.co/credit-line/2895/1905/891501133?step=3&sub_step=1&status=complete') {
    console.log('Estamos en la página https://app-staging.finkargo.com.co/credit-line/2895/1905/891501133?step=3&sub_step=1&status=complete');
    // Hacer clic en el botón "Siguiente" si estamos en la página correcta
    await page.getByRole('button', { name: 'Siguiente' }).click();
  } else {
    console.log('No estamos en la página https://app-staging.finkargo.com.co/credit-line/2895/1905/891501133?step=3&sub_step=1&status=complete. La URL actual es: ' + currentURL);
  }
  if (currentURL === 'https://app-staging.finkargo.com.co/credit-line/2895/1905/891501133?step=3&sub_step=2&status=complete') {
    console.log('Estamos en la página https://app-staging.finkargo.com.co/credit-line/2895/1905/891501133?step=3&sub_step=2&status=complete');
    // Hacer clic en el botón "Siguiente" si estamos en la página correcta
    await page.getByRole('button', { name: 'Siguiente' }).click();
  } else {
    console.log('No estamos en la página https://app-staging.finkargo.com.co/credit-line/2895/1905/891501133?step=3&sub_step=2&status=complete. La URL actual es: ' + currentURL);
  }
  if (currentURL === 'https://app-staging.finkargo.com.co/credit-line/2895/1905/891501133?step=3&sub_step=4') {
    console.log('Estamos en la página https://app-staging.finkargo.com.co/credit-line/2895/1905/891501133?step=3&sub_step=4');
    // Hacer clic en el botón "Atras" si estamos en la página correcta
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Atrás' }).click();
    await page.locator('input[name="name"]').nth(0).click();
    await page.locator('input[name="name"]').nth(0).fill('Adalberto');
    await page.locator('input[name="surname"]').nth(0).click();
    await page.locator('input[name="surname"]').nth(0).fill('del lago');
    await page.locator('input[name="percentage"]').nth(0).click();
    await page.locator('input[name="percentage"]').nth(0).fill('20');
    await page.locator('input[name="name"]').nth(1).click();
    await page.locator('input[name="name"]').nth(1).fill('Argemiro');
    await page.locator('input[name="surname"]').nth(1).click();
    await page.locator('input[name="surname"]').nth(1).fill('del Rio');
    await page.locator('input[name="percentage"]').nth(1).click();
    await page.locator('input[name="percentage"]').nth(1).fill('10');
    await page.getByRole('button', { name: 'Siguiente' }).click();

  } else {
    console.log('No estamos en la página https://app-staging.finkargo.com.co/credit-line/2895/1905/891501133?step=3&sub_step=4. La URL actual es: ' + currentURL);
  }
  
  if(currentURL === 'https://app-staging.finkargo.com.co/credit-line/2895/1905/891501133?step=4'){
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.getByRole('button', { name: 'Atrás' }); 
  }
    await page.getByText('Hombre').nth(0).click();
    await page.getByRole('option', { name: 'Hombre' }).nth(0).click();
    await page.getByText('CEDULA DE CIUDADANIA').nth(0).click();
    await page.getByRole('option', { name: 'CEDULA DE CIUDADANIA' }).nth(0).click();
    await page.locator('input[name="nit"]').nth(0).click();
    await page.locator('input[name="nit"]').nth(0).fill('105622345');
    await page.getByLabel('Elige la fecha, la fecha').nth(0).click();
    await page.getByRole('button', { name: '1981', exact: true }).click();
    await page.getByRole('button', { name: 'sep', exact: true }).click();
    await page.getByRole('gridcell', { name: '6', exact: true }).click();
    await page.locator('input[name="country_name"]').nth(0).click();
    await page.locator('input[name="country_name"]').nth(0).fill('Colombia');
    await page.getByRole('listbox', { name: 'País de nacimiento *' }).nth(0).click();
    await page.locator('#custom-autocomplete-select-city_name_46d141ce-a986-4a07-94ab-c9d75675cdcd').nth(0).click();
    await page.locator('#custom-autocomplete-select-city_name_46d141ce-a986-4a07-94ab-c9d75675cdcd').nth(0).fill('BOGOTA');
    await page.getByRole('option', { name: 'BOGOTÁ' }).nth(0).click();
    await page.getByLabel('Open').first().nth(0).click();
    await page.getByRole('option', { name: 'COLOMBIA +' }).nth(0).click();
    await page.getByLabel('Número de celular *').nth(0).click();
    await page.getByLabel('Número de celular *').nth(0).fill('3007226523');
    await page.locator('input[name="email"]').nth(0).click();
    await page.locator('input[name="email"]').nth(0).fill('miguel@yopmail.com');
    await page.evaluate(() => window.scrollBy(0, 400));
    await page.waitForTimeout(2000);
    await page.getByLabel('Hombre').nth(1).click();
    await page.getByRole('option', { name: 'Hombre' }).nth(0).click();
    await page.getByText('CEDULA DE CIUDADANIA').nth(1).click();
    await page.getByRole('option', { name: 'CEDULA DE CIUDADANIA' }).nth(0).click();
    await page.locator('input[name="nit"]').nth(1).click();
    await page.locator('input[name="nit"]').nth(1).fill('105179652');
    await page.getByLabel('Elige la fecha, la fecha').nth(1).click();
    await page.getByRole('button', { name: '1982', exact: true }).click();
    await page.getByRole('button', { name: 'sep', exact: true }).click();
    await page.getByRole('gridcell', { name: '6', exact: true }).click();
    await page.locator('#custom-autocomplete-select-country_name_8a341d95-3315-40bc-9645-656fd9391a5a').click();
    await page.getByRole('option', { name: 'COLOMBIA' }).click();
    await page.locator('#custom-autocomplete-select-city_name_8a341d95-3315-40bc-9645-656fd9391a5a').click();
    await page.getByRole('option', { name: 'ABEJORRAL' }).click();
    await page.getByLabel('Open').first().nth(0).click();
    await page.getByRole('option', { name: 'COLOMBIA +' }).click();
    await page.locator('#phone-cellphone_number').nth(1).click();
    await page.getByLabel('Número de celular *').fill('3127344251'); 
    await page.locator('input[name="email"]').nth(1).click();
    await page.locator('input[name="email"]').nth(1).fill('argemirol@yopmail.com');
    await page.getByRole('button', { name: 'Siguiente' });
});
