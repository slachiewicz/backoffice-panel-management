# Backoffice Angular App

![Maintainer](https://img.shields.io/badge/maintainer-extrawest.com-blue)
![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)
![GitHub release](https://img.shields.io/github/release/Naereen/StrapDown.js.svg)

## Project info

* **Backoffice Angular App** is based on **Angular v14.2**, **Nx v14.8** and consists of **5** different variations (apps)

* **Firebase** and **@angular/fire** are used as the backend and authentication provider

* **Ant Design** variation is based on **ng-zorro** and **TailwindCSS**

* **Material** variation is based on **Angular Material** and **TailwindCSS**

* **Nebular** variation is based on **Nebular** and **PrimeFlex**

* **PrimeNG** variation is based on **PrimeNG** and **PrimeFlex**

* **Tailwind** variation is based on **TailwindCSS**, **Angular CDK**, and doesn't utilize any other component library

* **Ngx-Echarts v15** and **Apache ECharts v5** are used for charts in **4** apps out of **5**

* **Normalize.css** is used for some of the app as a CSS reset library

* **Ng-Icons v22** is used for icons in some apps

## Features

* **Login and Logout** functionality

* **Dashboard** page with some mock data

* **Clients** page with tickets table and an ability to register a new ticket

## Demo

* [Ant Design (ng-zorro) demo](https://backoffice-antd.web.app/)
* [Material demo](https://backoffice-material.web.app/)
* [Nebular demo](https://backoffice-nebular.web.app/)
* [PrimeNG demo](https://backoffice-primeng.web.app/)
* [Tailwind demo](https://backoffice-tailwind.web.app/)

### Installing:

**1) Clone this repo to your folder:**

```
git clone https://github.com/extrawest/backoffice-panel-management.git
```

**2. Change current directory to the cloned folder:**

```
cd backoffice-panel-management
```

**3) You must have installed Node.js v18 LTS or higher. Run in terminal in root project directory:**

```
# with npm
npm install

# with yarn
yarn install

# with pnpm
pnpm install
```

**4) Create and configure app with .env file in root directory: **

```
NX_FIREBASE_API_KEY=...
NX_FIREBASE_AUTH_DOMAIN_(INSERT_APP_NAME_HERE)=...
NX_FIREBASE_PROJECT_ID=...
NX_FIREBASE_STORAGE_BUCKET=...
NX_FIREBASE_MESSAGING_SENDER_ID=...
NX_FIREBASE_APP_ID=...
```

You can take those variables from your Firebase console.

**5) Start project. Run in terminal:**

```
# with npm
npm run start

# with yarn
yarn run start

# with pnpm
pnpm run start
```

---

Created by Extrawest Angular Team
[Extrawest.com](https://www.extrawest.com), 2023

---
