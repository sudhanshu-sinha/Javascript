// objects
let student = {
    name: "Sudhanshu Sinha",
    uid: "21BCS9735",
    age: 19
}

student.name = "Sunny Sinha"

console.log(student.name)
console.log(student)

let employee = {
    firstName: "Sudhanshu",
    lastName: "Sinha",
    uid: "21BCS9735",
    age: 19,
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(employee.fullName())
console.log(employee.uid)

Object.freeze(employee) //we can not change any thing in employee

employee.uid= "21bcs9735"
console.log(employee.uid)

