// This file injects all the necessary files into index.html for the code editor to run
// JS file injection has been dropped because browsers no longer execute injected script for security reasons

// This function injects CSS into the head tag before index.css (custom css)
function appendCss(path, endLink) {
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = path;

  document.head.insertBefore(link, endLink);
}

let pathPrefixTheme = "../node_modules/codemirror/theme/";
let cmThemes = "monokai.css".split(" ");

let cssEnd = document.querySelector("#global-css");

// injecting css files before custom css (index.css)
cmThemes.map((path) => appendCss(pathPrefixTheme + path, cssEnd));
