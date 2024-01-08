/* Write a JavaScript program to check whether a string is blank or not. */

let str = "SudhAnshU"
if (str.length==0) {
    console.log("String is empty")
}
else{
    console.log("String is not empty")
}

/*  Write a JavaScript program to test whether the character at the given (character)
index is lower case. */
const index = 4
if(str[index]==str[index].toLocaleLowerCase()){
    console.log("Character is in lower case")
}
else{
    console.log("Chater is not in lower case")
}

/*  Write a JavaScript program to strip leading and trailing spaces from a string. */

let str2 = "   Sunny  "
console.log(`String without spaces ${str2.trim()}`)