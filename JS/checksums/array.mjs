let firstArray = ["mark", "iterations", "checksums", "variables"];
const javascriptObject = [
  "number",
  "null",
  "boolean",
  "bigint",
  "string",
  "symbol",
  "undefined",
];

const filterArray = firstArray.filter((word) => word.length < 10);
console.log(filterArray);

const addArray = () => {
  firstArray[4] = "undefined";
};
addArray();
console.log(typeof firstArray);

