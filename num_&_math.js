const balance =10000
const otherBalance = new Number(1000)

console.log(balance)
console.log(otherBalance)

console.log(otherBalance.toString().length)
console.log(otherBalance.toFixed(2)) //after decimal 2 digit

const bal = 132.3242
console.log(bal.toPrecision(4)) //round off to first 4 digit

const hundreds = 10000000
console.log(hundreds.toLocaleString()) //add comma after zeros according to us
console.log(hundreds.toLocaleString('en-IN')) //add comma after zeros according to us

//  Maths

console.log(Math)

console.log("abs = "+Math.abs(-3)) //absolute value => -3 => 3 and 3 => 3
console.log("round = "+Math.round(4.3)) //round off
console.log("celi = "+Math.ceil(4.2)) // it prints upper round off value means if 4.2 => 5 , 4.1=>5, 4.6=>5
console.log("floor = "+Math.floor(4.2)) // it prints lower round off value means if 4.2 => 4 , 4.1=>4, 4.6=>4

console.log("min = "+Math.min(11,4,3,7,2,9))
console.log("max = "+Math.max(11,4,3,7,2,9))

//random

console.log(Math.random()) // give random value between 0 and 1

console.log(Math.random()*10) // give random value between 0 and 10

console.log((Math.random()*10) + 1) // between 1 to 0
console.log(Math.floor(Math.random()*10) + 1) // between 1 to 0 (integer)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1))+min)