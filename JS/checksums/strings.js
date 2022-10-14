let names = "strings"
let data = "datas"

const sentences = `the name is ${names} and data is ${data}`
const word = "the name is"
console.log(sentences)
console.log(sentences[4])
console.log(sentences.length)

//* includes function
console.log(sentences.includes(word))
console.log(sentences ? sentences.includes(word) : "No sentence") //* includes function

//* uppercase lowercase
console.log(sentences.toUpperCase())
console.log(sentences.toLowerCase())

//+ real time working in javascript

let string = "Please give me rs 1000"
let amount = string.slice(18) //* sliced some data in above string
let amountConversion = Number.parseInt(string.slice(18)) //+ converted into number
console.log(typeof amountConversion)
console.log(amount)


