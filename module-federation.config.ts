export const mfConfig = {
  name: "remote",
  filename: "remoteEntry.js",
  exposes: {
    "./Button": "./src/Button",
  },
  shared: ["react", "react-dom"],
};
