import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "./src/editor.mjs",
  output: {
    file: "./src/bundle/editor.bundle.js",
    format: "iife",
  },
  plugins: [nodeResolve()],
};
