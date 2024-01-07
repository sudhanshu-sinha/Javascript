//Array

const arr = [1,2,3,7,22,26,"Sunny",545]
console.log(arr[6])

// Array Methods
arr.push(6)
arr.push(69) //add element in last
arr.pop()  //remove last element
console.log(arr)

arr.unshift(99) //add element in start but its not optimal
console.log(arr)

arr.shift() //remove from start
console.log(arr)

console.log(arr.includes(545)) //return true if include
console.log(arr.indexOf(22))

const newArr = arr.join() // it change datatype of array to string
console.log(newArr)
console.log(arr)
console.log(typeof(arr))
console.log(typeof(newArr))

/**************  slice, splice  ****************************
 * 
 * In slice it not change original array, it only cut the specified elements i.e  slice(start index, end index-1)
 * 
 * In splice it change original array, it remove the specified elements from array i.e splice(start index, end index)
*/

console.log("Array = ", arr)

const myNewArr1 = arr.slice(1,3) //it simply cut the array from starting index 1 and go to last index 3-1
console.log(myNewArr1)
console.log("After Slice original Array = ", arr)

const myNewArr2 = arr.splice(1,3) //it cut and remove the element from the array from starting index 1 and go to last index 3
console.log(myNewArr2)
console.log("After Splice original Array = ", arr)

