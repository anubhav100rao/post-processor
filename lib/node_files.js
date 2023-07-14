const url = require("node:url");
const fs = require("node:fs");
console.log(url.parse("https://jsonplaceholder.typicode.com/posts/1")); // deprecated
const reqUrl = new URL("https://jsonplaceholder.typicode.com/posts/1"); // new
console.log(reqUrl);

console.log(module);

const data = fs.readFileSync("./arrays.js", "utf-8"); // this function is synchronous
console.log(data);

const dataAsync = fs.readFile("./arrays.js", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
}); // this function is asynchronous

// append func.js

const dataFunc = `
function helloJavascript() {
    console.log("Hello Javascript");
}
`;

fs.appendFile("./func.js", dataFunc, (err) => {
  if (err) throw err;
  console.log("dataFunc is appended to func.js");
});


