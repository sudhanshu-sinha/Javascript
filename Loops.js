/* Write a JS program to delete all occurrences of element ‘num’ in a given array.
Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
Result should be arr = [1, 3, 4, 5, 6, 3] */

const arr = [1, 2, 3, 4, 5, 6, 2, 3]
const num = 2

for (let i = 0; i < arr.length; i++) {
    if(arr[i]==num){
        arr.splice(i,1)
    }
}
console.log(arr)

/* Write a JS program to find the no of digits in a number.
Example : if number = 287152, count = 6 */

/* Write a JS program to find the sum of digits in a number.
Example : if number = 287152, sum = 25 */

let number = 287152
let copy = number
let count = 0
let sum = 0
while(copy>0){
    count++
    sum += Math.floor(copy%10)
    copy = Math.floor(copy/10)
}
console.log(count)
console.log(sum)


/* Print the factorial of a number n.
[Factorial of a number n is the product of all positive integers less than or equal to a
given positive integer and denoted by that integer. ]
Example :
7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
5! (factorial of 5) = 1x2x3x4x5 = 120
3! (factorial of 3) = 1x2x3 = 6
0! Is always 1 */

let x = 9
let factorial = 1
for (let i = 1; i <= x; i++) {
    factorial *= i
}
console.log(factorial)

/* Find the largest number in an array with only positive numbers. */

largest = -1
for (let i = 0; i < arr.length; i++) {
    if (arr[i]>largest) {
        largest  = arr[i];
    }
}
console.log(largest)