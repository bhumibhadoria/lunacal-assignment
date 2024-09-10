##LUNACAL ASSIGNMENT

This project provides a minimal setup to get React working with Vite, Hot Module Replacement (HMR), and ESLint. It uses TypeScript for type safety and linting configurations to ensure code quality.

Getting Started
Prerequisites
Node.js (>= 14.x)
npm (comes with Node.js) or yarn
Installation
Clone the repository:

bash
Copy code
git clone <repository-url>
cd <project-directory>
Install dependencies:

bash
Copy code
npm install
# or
yarn install
Development
To start the development server with Hot Module Replacement (HMR), run:

bash
Copy code
npm run dev
# or
yarn dev
Visit http://localhost:3000 in your browser to view the application.

Linting
The project uses ESLint with TypeScript for linting and code quality. To lint your code, run:

bash
Copy code
npm run lint
# or
yarn lint
To automatically fix linting issues, run:

bash
Copy code
npm run lint:fix
# or
yarn lint:fix
Configuration
Vite
The project uses Vite as the build tool. Configuration is located in vite.config.ts.

ESLint
ESLint is configured for both JavaScript and TypeScript with the following settings:

@vitejs/plugin-react or @vitejs/plugin-react-swc for React Fast Refresh
Type-aware linting rules for TypeScript
To update ESLint configuration:

Add parser options:

Update the parserOptions property in eslint.config.js:

js
Copy code
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
Update rules:

Update the ESLint configuration to use recommended rules for React:

js
Copy code
import react from 'eslint-plugin-react'

export default tseslint.config({
  settings: { react: { version: '18.3' } },
  plugins: { react },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
Build
To build the project for production, run:

bash
Copy code
npm run build
# or
yarn build
The output will be placed in the dist directory.
