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

let number = 287152
let copy = number
let count = 0
while(copy>0){
    count++
    copy = Math.floor(copy/10)
}
console.log(count)
