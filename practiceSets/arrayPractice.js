const numberArray = [1, 2, 3, 4, 5, 6, 7, 8];
numberArray.push(9);
console.log(numberArray);

// let b;
// do {
//     b = numberArray.push(0)
//     console.log(numberArray)
// } while(b!=0){
//     console.log(numberArray)
// }

//* Divisible of the array */
const divisibleArray = [10, 20, 30, 40, 50, 60, 70, 80, 100];
const filterArray = divisibleArray.filter((number) => number % 10 == 0);

//* Filter of the array *//
const squareArray = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const filterState = squareArray.filter((arrayNum) => {
  return arrayNum % 10 == 0;
});
console.log(filterState);

//* Square of an array *//
const mapArray = [3, 6, 9, 12];
const mapStates = mapArray.map((element) => {
  return element * element;
});
console.log(mapStates);

//* Reduce of all the array and multiplies all the number init *//
const reduceArray = [20, 30, 40, 50];
const result = reduceArray.reduce((x, y)=>{
    return x * y
})
console.log(result)