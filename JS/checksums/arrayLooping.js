const loopArray = [9, 18, 27, 36, 45, 54, 63, 72, 81, 90];

//* Loop all of the array elements *//
for (let index = 0; index < loopArray.length; index++) {
    const element = loopArray[index];
}

//* Loop all of the array elements and gives the output for each element in array  *//
loopArray.forEach(element => {
    const elementsArray = element * element;
    const pie = Math.round(elementsArray)
    console.log(elementsArray)   
    console.log(pie)
});

//* Array.from creates an array from an element *//

const array = "Something"
const arr = Array.from(array)
console.log(arr)


//* For-of loop of an array { Shortcut method of accessing array } *//

for (const iterator of loopArray) {
    console.log(iterator)
}

//* For-in loop  { method of accessing array }  *//

for (const key in loopArray) {
    if (Object.prototype.hasOwnProperty.call(loopArray, key)) {
        const element = loopArray[key];
        console.log(element)
    }
}