import { EditorView, basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";

let view = new EditorView({
  doc: "console.log('hello');",
  extensions: [basicSetup, javascript()],
  parent: document.querySelector("#editor"),
});
