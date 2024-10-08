import { test, expect, Page } from '@playwright/test';

  const URLtesting  ='https://app-testing.finkargo.com.co/';
  const URLlogin = 'https://app-staging.finkargo.com.co/auth/login';
  const URLDesicion = 'https://app-staging.finkargo.com.co/analyst/credit-line/resume/CO:890900314:1';

test('Test-1, Cuando no se marcan las opciones de paga y global', async ({ page }: { page: Page }) => {
  test.setTimeout(60000);
  // Navegar a la página principal
  await page.goto(URLtesting);
  // Llenar el campo "Usuario"
  await page.locator('label').filter({ hasText: 'Usuario *' }).click();
  await page.getByLabel('Usuario *').fill('finkargo');
  // Llenar el campo "Contraseña"
  await page.locator('label').filter({ hasText: 'Contraseña *' }).click();
  await page.getByLabel('Contraseña *').fill('finkargo');
  // Hacer clic en el botón "Ingresar"
  await page.getByRole('button', { name: 'Ingresar' }).click();
  await page.waitForTimeout(4000);
  await page.goto('https://app-testing.finkargo.com.co/analyst/credit-line/resume/CO:891501133:1/');
  await page.waitForTimeout(8000);
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.getByLabel('Cupo total aprobado*').click();
  await page.getByLabel('Cupo total aprobado*').fill('$150,000');
  await page.getByLabel('Cupo mensual aprobado*').click();
  await page.getByLabel('Cupo mensual aprobado*').fill('$65,000');
  await page.getByLabel('Calificación comité *').click();
  await page.getByRole('option', { name: 'BRONCE' }).click();
  await page.getByRole('button', { name: '​', exact: true }).click();
  await page.getByRole('option', { name: 'SIN RESTRICCIONES' }).click();
  await page.getByRole('button', { name: 'Aprobar y enviar al cliente' }).click();
  
  //Verifica que el mensaje de validacion se muestre
  const errorMessage = await page.evaluate(() => {
    const element = document.querySelector('.notistack-CollapseWrapper');
    if (!element || !element.shadowRoot) {
      return null;
    }
      
  const xpathResult = document.evaluate('//div[@id="app"]/div[1]/div/div/div/div/div/div[2]//text()[contains(., "Debes seleccionar al menos un tipo de producto")]', 
    element.shadowRoot, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null
  );

  const errorMessageElement = xpathResult.singleNodeValue;

  return errorMessageElement ? errorMessageElement.textContent : null;
  
  });

  await page.getByText('Descartar').click();
  await page.waitForTimeout(2000);
  await page.getByLabel('close').click();
});


test('Test-2, Cuando el usuario marca la opcion de paga', async ({ page }: { page: Page }) => {
  test.setTimeout(60000);
  // Navegar a la página principal
  await page.goto(URLlogin);
  // Llenar el campo "Usuario"
  await page.locator('label').filter({ hasText: 'Usuario *' }).click();
  await page.getByLabel('Usuario *').fill('finkargo-admin');
  // Llenar el campo "Contraseña"
  await page.locator('label').filter({ hasText: 'Contraseña *' }).click();
  await page.getByLabel('Contraseña *').fill('finkargo');
  // Hacer clic en el botón "Ingresar"
  await page.getByRole('button', { name: 'Ingresar' }).click();
  await page.waitForTimeout(4000);
  console.log('Inicio sesion correcto');
  await page.waitForTimeout(6000);
  await page.goto('https://app-staging.finkargo.com.co/analyst/credit-line/resume/CO:99887445:1');
  await page.waitForTimeout(6000);
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.waitForTimeout(6000);
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.waitForTimeout(2000);
  await page.locator('xpath=//input[@name="paga"]').click();
  await page.locator("xpath=//input[@id='mui-5']").click();
  await page.locator("xpath=//input[@id='mui-5']").fill('15000');
  await page.locator("xpath=//input[@id='mui-6']").click();
  await page.locator("xpath=//input[@id='mui-6']").fill('600');
  await page.locator("xpath=//input[@id='mui-7']").click();
  await page.locator("xpath=//input[@id='mui-7']").fill('70');

  await page.click('xpath=//div[@id="select-risk-commite"]');
  await page.click('li[data-value="37"]');

  /// Verificar que la opción fue seleccionada correctamente (puedes verificar el texto o valor seleccionado)
  const selectedOption = await page.$eval('xpath=//div[@id="select-risk-commite"]',
            button => button.textContent);
  expect(selectedOption).toBe('BRONCE');

  await page.click('xpath = //div[@id="legal_attribution"]');
  await page.click('li[data-value="39"]');

  /// Verificar que la opción fue seleccionada correctamente (puedes verificar el texto o valor seleccionado)
  const selectedOption2 = await page.$eval('xpath = //div[@id="legal_attribution"]',
    button => button.textContent);
  expect(selectedOption2).toBe('N SMMLV');

});

test('Test-3, Cuando el usuario marca la opcion de global', async ({ page }: { page: Page }) => {
  test.setTimeout(60000);
  // Navegar a la página principal
  await page.goto(URLlogin);
  // Llenar el campo "Usuario"
  await page.locator('label').filter({ hasText: 'Usuario *' }).click();
  await page.getByLabel('Usuario *').fill('finkargo-admin');
  // Llenar el campo "Contraseña"
  await page.locator('label').filter({ hasText: 'Contraseña *' }).click();
  await page.getByLabel('Contraseña *').fill('finkargo');
  // Hacer clic en el botón "Ingresar"
  await page.getByRole('button', { name: 'Ingresar' }).click();
  await page.waitForTimeout(4000);
  console.log('Inicio sesion correcto');
  await page.waitForTimeout(6000);
  await page.goto('https://app-staging.finkargo.com.co/analyst/credit-line/resume/CO:456000876:1');
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Continuar' }).click();
  await page.locator('xpath=//input[@name="global"]').click();
  await page.locator("xpath=//input[contains(@class, 'MuiInputBase-input')]").nth(0).click();
  await page.locator("xpath=//input[contains(@class, 'MuiInputBase-input')]").nth(0).fill('15000');
  await page.locator("xpath=//input[@name='amount_per_month']").click();
  await page.locator("xpath=//input[@name='amount_per_month']").fill('600');
  await page.locator("xpath=//input[@name='lean_value_global']").click();
  await page.locator("xpath=//input[@name='lean_value_global']").fill('100');

  await page.click('xpath=//div[@id="select-risk-commite"]');
  await page.click('li[data-value="37"]');

  /// Verificar que la opción fue seleccionada correctamente (puedes verificar el texto o valor seleccionado)
  const selectedOption = await page.$eval('xpath=//div[@id="select-risk-commite"]',
            button => button.textContent);
  expect(selectedOption).toBe('BRONCE');

  await page.click('xpath = //div[@id="legal_attribution"]');
  await page.click('li[data-value="38"]');

  /// Verificar que la opción fue seleccionada correctamente (puedes verificar el texto o valor seleccionado)
  const selectedOption2 = await page.$eval('xpath = //div[@id="legal_attribution"]',
    button => button.textContent);
  expect(selectedOption2).toBe('SIN RESTRICCIONES');

});

