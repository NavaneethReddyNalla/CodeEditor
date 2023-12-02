// This file injects all the necessary files into index.html for the code editor to run
// JS file injection has been dropped because browsers no longer execute injected script for security reasons

// This function injects CSS into the head tag before index.css (custom css)
function appendCss(path, endLink) {
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = path;

  document.head.insertBefore(link, endLink);
}

function appendOptions(value, text, selectTag) {
  let optionTag = document.createElement("option");
  optionTag.value = value;
  optionTag.textContent = text;

  selectTag.appendChild(optionTag);
}

let pathPrefixTheme = "../node_modules/codemirror/theme/";
let cmThemes = "monokai.css".split(" ");

let languages = {
  java: "Java",
  python: "Python",
  cpp: "C++",
  c: "C",
  js: "JavaScript",
};

let cssEnd = document.querySelector("#global-css");

// injecting css files before custom css (index.css)
cmThemes.map((path) => appendCss(pathPrefixTheme + path, cssEnd));

// Appending the language options to language select
let selectTag = document.querySelector("#language");
for (let key in languages) {
  appendOptions(key, languages[key], selectTag);
}
