// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970
const myDate = new Date();
console.log(myDate) //Output : 2023-10-09T14:38:09.847Z


// We can use various methods to convert this date into more readable value.
console.log(myDate.toString()) //Output : Mon Oct 09 2023 07:39:18 GMT-0700 (Pacific Daylight Time)

console.log(myDate.toLocaleString()) // Output : 10/9/2023, 7:44:20 AM
console.log(myDate.toLocaleDateString()) //Output : 10/9/2023
console.log(myDate.toLocaleTimeString()) // Output : 7:45:31 AM

console.log(myDate.toDateString()) //Output : Mon Oct 09 2023
console.log(myDate.toTimeString()) // Output : 07:46:40 GMT-0700 (Pacific Daylight Time)

console.log(myDate.toISOString()) // Output : 2023-10-09T14:43:39.337Z
console.log(myDate.toJSON()) //Output : 2023-10-09T14:40:58.495Z


let myCreatedDate=new Date(2004, 4, 18) // In single digit months starts from 0 means 4 => May
let myNewCreatedDate=new Date("2004-04-18") // In single digit months starts from 0 means 04 => April

console.log(myCreatedDate.toDateString())
console.log(myNewCreatedDate.toDateString())


console.log(Date.now()) //current date in miliseconds
console.log(Math.floor(Date.now()/1000)) //current date in seconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1) //return month
console.log(newDate.getDay()) //return Day


