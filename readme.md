# react-remote

This project is a micro front-end built with React, Rspack, TailwindCSS, Module Federation with Zephyr Cloud.

> **Note:** You must run this project locally before accessing the deployed URL. The remote module needs to be available on your local machine for integration with other applications.

## Scripts

- `npm start` — Start the development server at [http://localhost:8081](http://localhost:8081)
- `npm run build` — Build for production
- `npm run build:dev` — Build in development mode
- `npm run build:start` — Serve the build from the `dist` folder

## Project Structure

```
src/
  App.tsx         # Main application component
  Button.tsx      # Button component exposed via Module Federation
  index.ts        # Entry point
  index.css       # TailwindCSS styles
```

## Module Federation

The configuration in [`module-federation.config.ts`](module-federation.config.ts) exposes the [`Button`](src/Button.tsx) component for remote consumption:

```ts
// module-federation.config.ts
export const mfConfig = {
  name: "remote",
  filename: "remoteEntry.js",
  exposes: {
    "./Button": "./src/Button",
  },
  shared: ["react", "react-dom"],
};
```

## Technologies

- [React](https://react.dev/)
- [Rspack](https://www.rspack.dev/)
- [Module Federation Enhanced](https://module-federation.io/)
- [TailwindCSS](https://tailwindcss.com/)

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the project:
   ```sh
   npm start
   ```
3. Open [http://localhost:8081](http://localhost:8081) in your browser.

> **Important:** Make sure this project is running locally before accessing the deployed URL that consumes this remote module.

---