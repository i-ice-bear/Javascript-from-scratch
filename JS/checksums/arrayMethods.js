//+------------------------------------- Array methods --------------------------------+//

//+ array to string method *//

//* to string array *//
let toStringArray = [1, 2, 3, 4];
console.log(toStringArray.toString());

//* join to the array
const joinArray = toStringArray.join(" | ");
console.log(joinArray);

//* Pop method { Change the existing array } *//

const poppingArray = [1, 3, 4, 5453, 534, 23, 43];
poppingArray.pop();
const r = poppingArray.pop();
console.log(poppingArray);

//* Pushing array { Adds a new element in array } *//

const pushArray = [1, 24, 53, 234];
const pushSomething = pushArray.push(90);
console.log(pushArray, pushSomething);

//* Shift method { Removes the first element of an array } *//
const shiftArray = [1, 24, 53, 234, 332];
const shiftSomething = shiftArray.shift();
console.log(shiftArray, shiftSomething);

//* Unshift method { Adds the element from beginning of an array } *//
const unshiftArray = [43, 24, 53, 234, 323, 123];
const unshifts = unshiftArray.unshift(32);
console.log(unshifts, unshiftArray);

//* Delete method() delete a particular index from an array *//

const deleteArray = [1, 23, 253, 23, 324, 234];
delete deleteArray[1];
console.log(deleteArray);
console.log(deleteArray.length);

//* Concat() Adds multiple arrays *//
const concatArray1 = [13, 34, 53, 23, 352, 324];
const concatArray2 = [324, 5, 342, 342, 3234];
console.log(concatArray1.concat(concatArray2));

//* Array sort method sort() *//
//* Returns alphabetically order *//

const arraySort = [3, 243, 523, 12, 352];
const ascending = (a, b) => {
  return a - b;
};
ascending();
const descending = (a, b) => {
  return b - a;
};
arraySort.sort(ascending);
console.log(arraySort);

//*  Reverse array { Reverse array } *//

const reverseArray = [214, 2352, 34, 32523, 423, 423];
reverseArray.reverse();

//* Splice (index, remove, addons) arguements it modifies source arrays*//
const spliceArray = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];
spliceArray.splice(4, 5, 10, 20, 30, 40);
const deleteArrays = spliceArray.splice(4, 5, 10, 20, 30, 40);

console.log(spliceArray);

//* Slice array creates a new array along the functions given *//

const sliceArray = [8, 16, 24, 32, 40, 48, 56, 64, 72, 80];
const newSlice = sliceArray.slice(6, 8);
console.log(newSlice);
