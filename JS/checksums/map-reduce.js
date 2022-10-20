let data;
data = ["Something", "Variables", "Constant"];
data.push("Addition");

//* map function
data.map((index, value, array) => {
  console.log(index, value, array);
  return value + index;
});

//* Array filter function
const numbers = [1, 3, 2, 5, 5, 32, 3, 234, 2, 323, 45, 3];
const filterData = numbers.filter((data) => data > 2);
// console.log(filterData);

//* Reduce method

const repeation = [323, 123, 423, 532, 231, 4, 153, 234, 234];

const reduce = repeation.reduce((a, b)=>{
    return a + b
})
console.log(reduce)