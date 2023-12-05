function compileAndExecute() {
  const stdinput = document.querySelector("#input-box").value;
  const code = myCodeMirror.getValue();
  const url =
    "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=true&fields=*";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "77e9e3fcfdmshfdcb1ad03739398p1669a4jsn90b7434ac5d5",
      "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
    },
    body: JSON.stringify({
      language_id: 62,
      source_code: code,
      stdin: stdinput,
    }),
  };

  try {
    const response = fetch(url, options);
    const result = response
      .then((response) => response.json())
      .then((obj) => console.log(obj));
  } catch (error) {
    console.log("Error");
    console.error(error);
  }
}

// async function getOutput(token) {
//   const output = document.querySelector("output");
//   const url = `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=true&fields=*`;
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "77e9e3fcfdmshfdcb1ad03739398p1669a4jsn90b7434ac5d5",
//       "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

let runBtn = document.querySelector("#run");
runBtn.addEventListener("click", compileAndExecute);
