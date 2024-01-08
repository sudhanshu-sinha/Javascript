/*Write a JavaScript program to get the first n elements of an array. [n can be any
positive number].
For example: for array [7, 9, 0, -2] and n=3
Print, [7, 9, 0]*/ 

const array = [7, 9, 0, -2]
const n = 3
console.log(array.slice(0,n))

/*  Write a JavaScript program to get the last n elements of an array. [n can be any
positive number].
For example: for array [7, 9, 0, -2] and n=3
Print, [9, 0, -2] */

console.log(array.slice(array.length-n))

/*  Write a JavaScript program to check if an element exists in an array or not. */

console.log(array.includes(9))
console.log(array.includes(99))
