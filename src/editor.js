let textValue =
  'class Hello {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}';
let editorDiv = document.querySelector("#editor");

let myCodeMirror = CodeMirror(editorDiv, {
  value: textValue,
  mode: "text/x-java",
  lineNumbers: true,
  indentWithTabs: true,
  indentUnit: 4,
  showHint: true,
  theme: "monokai",
});
