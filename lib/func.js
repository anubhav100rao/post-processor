// function constructor

let add = new Function("a", "b", "return a + b");

console.log(add(1, 2));

// function expression

let mul = function (a, b) {
  return a * b;
};

console.log(mul(2, 3));

// arrow function

let sub = (a, b) => {
  return a - b;
};

console.log(sub(5, 2));

// immediate execution of function expression

(function () {
  console.log("Say Hi!");
})();

function helloJavascript() {
  console.log("Hello Javascript");
}
