let languageConfig = {
  java: {
    template: `class Hello {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}`,
    mode: "text/x-java",
  },
  js: {
    template: `console.log("Hello World");`,
    mode: "javascript",
  },
  python: {
    template: `print("Hello World");`,
    mode: "python",
  },
  cpp: {
    template: `#include <iostream>\nusing namespace std;\n\nvoid main() {\n\tcout << "Hello World" << endl;\n}`,
    mode: "text/x-c++src",
  },
  c: {
    template: `#include <stdio.h>\n\nint main() {\n\tprintf("Hello World\\n");\n\treturn 0;\n}`,
    mode: "text/x-csrc",
  },
};

function changeLanguage(cmInstance, langSelect) {
  let option = languageConfig[langSelect.value];
  cmInstance.setOption("mode", option.mode);
  cmInstance.setValue(option.template);
}

function changeTheme(cmInstance, themeSelect) {
  let newTheme = themeSelect.value;
  cmInstance.setOption("theme", newTheme);
}

let editorDiv = document.querySelector("#editor");

let myCodeMirror = CodeMirror(editorDiv, {
  lineNumbers: true,
  indentWithTabs: true,
  indentUnit: 4,
  showHint: true,
  autoCloseBrackets: true,
});

// Binding event changes to language select options
let langSelect = document.querySelector("#language");
changeLanguage(myCodeMirror, langSelect); // This runs when the page loads to load the default language
langSelect.addEventListener("change", () => {
  changeLanguage(myCodeMirror, langSelect);
});

// Binding event changes to theme select options
let themeSelect = document.querySelector("#theme");
changeTheme(myCodeMirror, themeSelect);
themeSelectTag.addEventListener("change", () => {
  changeTheme(myCodeMirror, themeSelect); // This runs  when the page loads to load the default theme
});
