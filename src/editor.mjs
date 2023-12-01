import { EditorState } from "../node_modules/@codemirror/state";
import { EditorView, keymap } from "../node_modules/@codemirror/view";
import { defaultKeymap } from "../node_modules/@codemirror/commands";

let startState = EditorState.create({
  doc: "Hello World",
  extensions: [keymap.of(defaultKeymap)],
});

let view = new EditorView({
  state: startState,
  parent: document.querySelector("#editor"),
});
