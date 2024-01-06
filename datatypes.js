/* permitive 
    => 7 types : String, Number, Boolean, null, undefined, symbol, BigInt
   
   Non primitive (Reference Type)
    => Array, Objects, Functions
*/


//premitive
const x = 30
const y = 100.4

const isLogin =false
const temp =null

let userEmail;

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id==id2);

const bignum = 124123432424244342523n

//non premitive
const arr = ["sunny","sudhanshu","sinha"];
let obj = {
    name: "Sunny",
    age: 19
}

const myfunction = function(){
    console.log("Hello Js");
}

console.log(typeof id);

