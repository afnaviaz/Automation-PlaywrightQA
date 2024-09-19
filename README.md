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
npm install
```

Esto descargará e instalará todas las dependencias necesarias definidas en el archivo package.json.

## 4. Instalar Playwright
Si Playwright no se ha instalado automáticamente con las dependencias, puedes instalarlo manualmente ejecutando:
```bash
npx playwright install
```

## 5. Instalar Allure para generar reportes
Para utilizar Allure como generador de reportes, sigue estos pasos:

### 5.1 Instalar Allure como dependencia de desarrollo
Añade Allure como dependencia de desarrollo a tu proyecto:
```bash
npm install -D allure-playwright
```