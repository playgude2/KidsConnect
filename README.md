# KidsConnect Application

This project is a React + TypeScript + Vite setup that integrates Electron for desktop applications. It features HMR (Hot Module Replacement) for development and various utilities for building and linting the application.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Running the Development Server](#running-the-development-server)
3. [Building the Application](#building-the-application)
4. [Folder Structure](#folder-structure)
5. [Special Notes](#special-notes)
6. [ESLint Configuration](#eslint-configuration)

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/playgude2/KidsConnect
   cd KidsConnect
   ```

2. **Install dependencies:**

   Ensure you have Node.js installed, then run:

   ```bash
   npm install
   ```

## Running the Development Server

To run the app in development mode with Hot Module Replacement (HMR), use the following command:

```bash
npm run dev
```

### Important Note for Development

When running the application in development mode, make sure to use ES module imports for `pdfMake` and `pdfFonts` as shown below:

```typescript
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
```

You need to remove any `require` statements related to `pdfMake` and `pdfFonts`.

## Building the Application

To build the application for production, use the following command:

```bash
npm run build
```

This command will clean any previous builds, compile TypeScript, and bundle the application using Vite and Electron Builder.

### Important Note for Production Build

When building the application, replace the ES module imports with `require` statements as shown below:

```javascript
const pdfMake = require("pdfmake/build/pdfmake");
const pdfFonts = require("pdfmake/build/vfs_fonts");

pdfMake.vfs = pdfFonts.pdfMake.vfs;
```

Remove any ES module imports for `pdfMake` and `pdfFonts` before building the application.

## Folder Structure

The project structure is organized as follows:

```bash
KidsConnect/
├── 📁public
│   └── vite.svg
├── 📁src
│   ├── 📁assets
│   │   ├── 📁Body
│   │   │   └── Body-1.png
│   │   │   └── Body-10.png
│   │   │   └── ...
│   │   ├── 📁Colors
│   │   │   └── black.png
│   │   │   └── blue.png
│   │   │   └── ...
│   │   ├── 📁Emojis
│   │   │   ├── 📁Animals
│   │   │   │   └── Sticker-11.png
│   │   │   │   └── ...
│   │   │   ├── 📁Buildings
│   │   │   │   └── Sticker-1.png
│   │   │   │   └── ...
│   │   │   ├── 📁Emotions
│   │   │   │   └── Emoji-1.png
│   │   │   │   └── ...
│   │   │   ├── 📁Persons
│   │   │   │   └── Emoji-12.png
│   │   │   │   └── ...
│   │   ├── 📁Heads
│   │   │   └── Head-1.png
│   │   │   └── ...
│   │   ├── 📁Legs
│   │   │   └── Legs-1.png
│   │   │   └── ...
│   │   ├── 📁letter-to-judge
│   │   │   └── judge.png
│   │   │   └── ...
│   │   ├── 📁TextEditorComponents
│   │   │   └── cursor_move.png
│   │   │   └── ...
│   │   ├── 📁ThreeWishesComponents
│   │   │   └── BaseWand.png
│   │   │   └── ...
│   │   ├── 📁worryComponents
│   │   │   └── 1to5.png
│   │   │   └── ...
│   │   └── other images, icons, and assets...
│   ├── 📁components
│   │   ├── DraggablePlacedSticker.tsx
│   │   ├── DraggableSticker.tsx
│   │   ├── ...
│   ├── 📁locales
│   │   ├── 📁cy
│   │   │   └── translation.json
│   │   ├── 📁en
│   │   │   └── translation.json
│   ├── 📁Pages
│   │   ├── 📁About
│   │   │   ├── About.module.css
│   │   │   └── About.tsx
│   │   ├── 📁Admin
│   │   │   ├── Admin.module.css
│   │   │   └── Admin.tsx
│   │   ├── other page components...
│   ├── 📁services
│   │   └── userService.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
│   └── other source files...
├── README.md
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── other configuration files...
```

## Special Notes

- **Local Storage:** The application uses `localStorage` to store case details, user preferences, and other data. Ensure that the browser's local storage is enabled for the app to function correctly.

## Expanding the ESLint Configuration

For production applications, it is recommended to enable type-aware lint rules. Update your ESLint configuration as follows:

1. **Configure `parserOptions`:**

   ```javascript
   export default {
     parserOptions: {
       ecmaVersion: 'latest',
       sourceType: 'module',
       project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
       tsconfigRootDir: __dirname,
     },
   };
   ```

2. **Update ESLint Rules:**

   Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.

3. **Optional:** Add `plugin:@typescript-eslint/stylistic-type-checked` for stylistic lint rules.

4. **React Plugin:**

   Install the `eslint-plugin-react` and extend your ESLint configuration with `plugin:react/recommended` and `plugin:react/jsx-runtime`.
