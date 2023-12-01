// This file has the extension .mjs to signify that this is a ES6 module which will later be bundled into a single file by
// the bundler (Rollup.js in this case) and will be used by index.html to generate our code editor

import { java } from "../node_modules/@codemirror/lang-java";
import { EditorView, keymap } from "../node_modules/@codemirror/view";
import {} from "../node_modules/@codemirror/commands";
import { EditorSelection } from "../node_modules/@codemirror/state";

let template = `class Hello {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}`;

let view = new EditorView({
  doc: template,
  extensions: [java(), EditorView.lineWrapping],
  parent: document.querySelector("#editor"),
});
