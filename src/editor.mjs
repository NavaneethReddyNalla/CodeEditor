// This file has the extension .mjs to signify that this is a ES6 module which will later be bundled into a single file by
// the bundler (Rollup.js in this case) and will be used by index.html to generate our code editor

import { EditorView, basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";

let view = new EditorView({
  doc: "console.log('hello');",
  extensions: [basicSetup, javascript()],
  parent: document.querySelector("#editor"),
});
