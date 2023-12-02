// This file has the extension .mjs to signify that this is a ES6 module which will later be bundled into a single file by
// the bundler (Rollup.js in this case) and will be used by index.html to generate our code editor

import { EditorState } from "../node_modules/@codemirror/state";
import { highlightSelectionMatches } from "../node_modules/@codemirror/search";
import {
  indentWithTab,
  history,
  defaultKeymap,
  historyKeymap,
} from "../node_modules/@codemirror/commands";
import {
  foldGutter,
  indentOnInput,
  indentUnit,
  bracketMatching,
  foldKeymap,
  syntaxHighlighting,
  defaultHighlightStyle,
} from "../node_modules/@codemirror/language";
import {
  closeBrackets,
  autocompletion,
  closeBracketsKeymap,
  completionKeymap,
} from "../node_modules/@codemirror/autocomplete";
import {
  lineNumbers,
  highlightActiveLineGutter,
  highlightSpecialChars,
  drawSelection,
  dropCursor,
  rectangularSelection,
  crosshairCursor,
  highlightActiveLine,
  keymap,
  EditorView,
} from "../node_modules/@codemirror/view";

// Theme
import { oneDark } from "@codemirror/theme-one-dark";

// Language
import { javaLanguage } from "@codemirror/lang-java";

function createEditorState(initialContents = "", options = {}) {
  let extensions = [
    lineNumbers(),
    highlightActiveLineGutter(),
    highlightSpecialChars(),
    history(),
    foldGutter(),
    drawSelection(),
    indentUnit.of("    "),
    EditorState.allowMultipleSelections.of(true),
    indentOnInput(),
    bracketMatching(),
    closeBrackets(),
    autocompletion(),
    rectangularSelection(),
    crosshairCursor(),
    highlightActiveLine(),
    highlightSelectionMatches(),
    keymap.of([
      indentWithTab,
      ...closeBracketsKeymap,
      ...defaultKeymap,
      ...historyKeymap,
      ...foldKeymap,
      ...completionKeymap,
    ]),
    javaLanguage,
    EditorView.lineWrapping,
    syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
  ];

  if (options.oneDark) extensions.push(oneDark);

  return EditorState.create({
    doc: initialContents,
    extensions,
  });
}

function createEditorView(state, parent) {
  return new EditorView({ state, parent });
}

let template = `class Hello {
    public static void main(String[] args) {
        System.out.println("Hello World");
  }
}`;

let editor = document.querySelector("#editor");
let state = createEditorState(template, { oneDark: true });

createEditorView(state, editor);
