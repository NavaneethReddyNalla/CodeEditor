// let textValue = "print('Hello world')";

let textValue = "function myScript() {\n\treturn 100;\n}\n";
let editorDiv = document.querySelector("#editor");

let myCodeMirror = CodeMirror(editorDiv, {
  value: textValue,
  mode: "javascript",
  lineNumbers: true,
  indentWithTabs: true,
  indentUnit: 4,
  showHint: true,
  theme: "monokai",
});
