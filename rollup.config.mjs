// This is the configuration file for the rollup bundler. This config file tells the bundler to take the source code
// from editor.mjs and bundle it with the required modules of CM6. It then generates the single js output file into
// src/bundle/ directory as 'editor.bundle.js'.
//
// In package.json, rollup has been added as the dev dependencies as end users won't be using a bundler to run the program
// instead they'll already be served with the bundled 'editor.bundle.js`
// "scripts" has been added with the attribute {"start": "rollup -c -w"} so that when we run the command `npm start`,
// it runs the command `rollup -c -w` which invokes rollup,
// * the -c (short for --config) flag makes it read the configuration details from the config file(this file)
//   and create the bundle file according to the specifications
// * the -w (short for --watch) flag makes npm to keep a watch for changes done to the project and invoke
//   the command every time a change is made so that we don't have to manually bundle the files all the time

import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "./src/editor.mjs",
  output: {
    file: "./src/bundle/editor.bundle.js",
    format: "iife", // This format is immediate invokation format extension which is used to invoke the file bundled immediately upon reference
    // It does that by adding all the bundled code into a wrapper function which is called when the file is referenced
  },
  plugins: [nodeResolve()],
};
