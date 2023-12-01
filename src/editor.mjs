// This file has the extension .mjs to signify that this is a ES6 module which will later be bundled into a single file by
// the bundler (Rollup.js in this case) and will be used by index.html to generate our code editor

import { java } from "../node_modules/@codemirror/lang-java";
import { EditorView, keymap } from "../node_modules/@codemirror/view";
import { oneDark } from "../node_modules/@codemirror/theme-one-dark";
import { indentWithTab } from "../node_modules/@codemirror/commands";
import {
  EditorSelection,
  EditorState,
} from "../node_modules/@codemirror/state";
import { basicSetup, indentLess, indentMore } from "../node_modules/codemirror";

let template = `class Hello {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}`;

let newState = EditorState.create({
  doc: template,
  extensions: [
    basicSetup,
    oneDark,
    java(),
    EditorView.lineWrapping,
    keymap.of([indentWithTab]),
  ],
});

let view = new EditorView({
  state: newState,
  parent: document.querySelector("#editor"),
});
