// let textValue = "print('Hello world')";

let textValue = "function myScript() {\n\treturn 100;\n}\n";

let myCodeMirror = CodeMirror(document.body, {
  value: textValue,
  mode: "javascript",
  lineNumbers: true,
  indentWithTabs: true,
  indentUnit: 4,
  theme: "monokai",
});
