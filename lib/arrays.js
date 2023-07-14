// constructor declaration
const arrConstruct = new Array(1, 2, 3, 4, 5);
console.log(arrConstruct);

// normal array declaration

const arr = [1, 2, 3, 4, 5];
console.log(arr);

const emptyArr = new Array(5); // creates an array of length 5 with empty slots

console.log(arrConstruct.length + arr.length + emptyArr.length);

const user = {
  name: "John",
  age: 30,
};

console.log(Array.isArray(arr), Array.isArray(user)); // false

// array methods

arr.push(6); // adds to the end of the array
console.log(arr);

arr.unshift(0); // adds to the beginning of the array
console.log(arr);

arr.pop(); // removes the last element of the array
console.log(arr);

arr.shift(); // removes the first element of the array
console.log(arr);

// map method

const arrMap = [1, 2, 3, 4, 5];

const modifiedArrMap = arrMap.map((item) => {
  return item * 2;
});

console.log(arrMap, modifiedArrMap);

// filter method

const even = arrMap.filter((item) => {
  return item % 2 === 0;
});

console.log(even);

// reduce method

const sum = arrMap.reduce((acc, item) => {
  return acc + item;
});
console.log(sum);

// forEach method

arrMap.forEach((item) => {
  console.log(item);
});

console.log(arrMap);

// from Array.from(iterable, mapFn, thisArg)

const arrFrom = Array.from("hello");
console.log(arrFrom);

const arrFrom2 = Array.from([1, 2, 3], (x) => x + x);
console.log(arrFrom2);

const originalArr = [3, 6, 0, 1, 4, 6, 8, 112];
function createNewArray(value, start, end) {
  const res = Array.from(originalArr);
  res.fill(value, start, end);
  return res;
}
