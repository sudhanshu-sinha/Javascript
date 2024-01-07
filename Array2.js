const marvel = ['IronMan','Thor','SpiderMan']
const DC = ['SuperMan','BatMan','Flash']

marvel.push(DC) // it simply add 2nd array inside an array
console.log(marvel)
console.log(marvel[3][2])
marvel.pop()

/*
const allHeros = marvel.concat(DC) //it add second array element in first array
console.log(allHeros)
*/

//+++++++++ Alternate of CONCAT +++++++++++++++++++++++
const allNewHero = [...marvel, ...DC]  // spread elements of both the array
console.log(allNewHero)

// flat(depth)  ie it also spread the array  
const another_array = [1,4,3,6,[2,3,[6,8,7],4,6],9,10,[11,14,19]]
const flat_array = another_array.flat(1)  // it will spread array till depth 1 
console.log(flat_array)
const all_flat_array = another_array.flat(Infinity)  // it will spread array till depth infinity means all 
console.log(all_flat_array)

console.log(Array.isArray("Sunny"))
console.log(Array.from("Sunny"))   //it change string to array

//+++++++ Important ++++++++++++
console.log(Array.from({name: "Sudhanshu"}))  // here it make empty array because it is confused either i have to make array of key or values


let score1 = 56
let score2 = 78
let score3 = 98

console.log(Array.of(score1,score2,score3))  // it also create array of all scores given