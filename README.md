# Instalación y Configuración

Este proyecto utiliza **Playwright** para la automatización de pruebas y **Allure** para generar reportes detallados. A continuación, te explicamos los pasos necesarios para configurar el entorno.

## 1. Requisitos Previos

Antes de empezar, asegúrate de tener instalados los siguientes componentes:

- **Node.js** (versión 16 o superior)
- **npm** o **yarn** para gestionar dependencias

### Verificar instalación de Node.js y npm:

```bash
node -v   # Debería mostrar la versión de Node.js
npm -v    # Debería mostrar la versión de npm
```
## 2. Clonar el repositorio
Clona este repositorio en tu máquina local usando el siguiente comando:

```bash
git clone https://github.com/afnaviaz/Automation-PlaywrightQA.git
```
Luego, navega al directorio del proyecto clonado:

```bash
cd <nombre-del-directorio>
```

## 3. Instalar dependencias
Para instalar las dependencias del proyecto, incluyendo Playwright, ejecuta el siguiente comando dentro de la carpeta del proyecto:
```bash
npm init -y
```

Esto descargará e instalará todas las dependencias necesarias definidas en el archivo package.json.

## 4. Instalar Playwright
Si Playwright no se ha instalado automáticamente con las dependencias, puedes instalarlo manualmente ejecutando:
```bash
npm install @playwright/test --save-dev
```

## 5. Instalar Allure para generar reportes
Para utilizar Allure como generador de reportes, sigue estos pasos:

### 5.1 Instalar Allure como dependencia de desarrollo
Añade Allure como dependencia de desarrollo a tu proyecto:
```bash
npm install allure-playwright --save-dev
```

### 5.2 Verificar la instalación de Allure
Para asegurarte de que Allure está correctamente instalado, ejecuta:

```bash
allure --version
```
### 5.3 Configurar Allure en Playwright:
Para habilitar los reportes de Allure en Playwright, necesitas agregar el plugin de Allure en tu archivo de configuración de Playwright (playwright.config.ts o playwright.config.js).

Ejemplo de configuración básica: Si tienes un archivo playwright.config.ts, añade lo siguiente:
```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['list'],
    ['allure-playwright']
  ],
  use: {
    // Configuraciones adicionales si las necesitas
  },
});

```

## 6. Ejecución de pruebas
Para ejecutar las pruebas automatizadas de Playwright, simplemente ejecuta el siguiente comando:
```bash
npx playwright test
```
## 7. Generar reportes Allure
Después de ejecutar las pruebas, puedes generar un reporte de Allure con el siguiente comando
```bash
npx allure generate ./allure-results --clean
 ```
 Esto generará un reporte HTML que puedes abrir en tu navegador ejecutando:

```bash
npx allure open
```

## Resumen de pasos:
1. Copia el proyecto al repositorio clonado.
2. Inicializa el proyecto Node.js si es necesario (npm init -y).
3. Instala Playwright (npm install @playwright/test --save-dev).
4. Instala Allure Playwright (npm install allure-playwright --save-dev).
5. Configura el reporte Allure en playwright.config.ts.
6. Ejecuta las pruebas con npx playwright test.
7. Genera y visualiza el reporte con Allure (npx allure generate y npx allure open).