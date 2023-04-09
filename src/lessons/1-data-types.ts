// Data types

// Primitive types: Strings, Numbers, Boolean, null, undefined

// Strings
const olgaName = 'Olga'
const ruslanName = "Ruslan"
const johnName = `John`

const love = olgaName + ' and ' + ruslanName + ' love each other'
const love1 = `${olgaName} and ${ruslanName} love each other`

// console.log(love1);

// Numbers
const num1 = '11'
const num2 = 11

// console.log(num2 % num1); // reminder
// console.log(num1 === num2);
// console.log(Infinity > num1);

// Boolean
const bool0 = true
const bool1 = false

// Null & undefined - пустота
let empty

// console.log(empty); //=> undefined   

const nl = null
// console.log(nl); //=> undefined   

// Non-primitive types: Objects, Arrays

// Objects
const person = {
    // key: value
    name: 'John',
    age: 25,
    isMarried: false
}

// console.log(person.age); //=> get value from object by key age = 25

// Arrays          0        1         2
const fruits = ['apple', 'orange', 'cherry']

// console.log(fruits[2]); //=> get element from array
