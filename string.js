const name = "Sudhanshu"
const age = 19

const lastname = new String("Sinha") //2nd way of declaring string

console.log("my name is " + name + " and " + "i am " +age+ " years old");

//efficient way
console.log(`My name is ${name} ${lastname} and I am ${age} years old`);  

console.log(name[3])

console.log(name.length)

console.log(name.toUpperCase()) //it only print name in upper case but not change its value in memory because it is primitive and uses stack

console.log(name.charAt(3))

console.log(name.indexOf('a'))

console.log(name.substring(0, 5)) //(start index, range) we cant use negative(-1) for reverse in it

console.log(name.slice(0, 4))
console.log(name.slice(-1, 9)) //use -ve for reverse in it


const trimName = "   Sunny    "
console.log(trimName.trim())  //remove spaces from both side
console.log(trimName.trimStart()) //remove spaces from start
console.log(trimName.trimEnd())  //remove spaces from end

const url = "https://www.youtube.com/Sudhanshu%20Sinha" //if we write spce in url then browser automatically add %20 in place of space

console.log(url.replace('%20', '-')) // it replace "%20" with "-"

console.log(url.includes('Sudhanshu'))  //return true because present in url
console.log(url.includes('sunny'))  //return false because not present in url

console.log(url.split('%20')) //in split you have write on which basis you want to split string
console.log(url.split("."))

