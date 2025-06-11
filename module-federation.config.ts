export const mfConfig = {
  name: "react_remote",
  filename: "remoteEntry.js",
  exposes: {
    "./Button": "./src/Button",
  },
  shared: ["react", "react-dom"],
};
