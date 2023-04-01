"use strict";
// Коммент
// alert('Hello Olga!') //=> уведомление показываем
// const answer = prompt('how are you doing?') //=> инпут юзера
// const answer = confirm('are you hungry?') //=> boolean
// Data types
// Primitive types:
// Strings
const olgaName = 'Olga';
const ruslanName = 'Ruslan';
const love = olgaName + ' and ' + ruslanName + ' love each other';
const love1 = `${olgaName} and ${ruslanName} love each other`;
// console.log(love1);
// Numbers
const num1 = '11';
const num2 = 11;
// console.log(num2 % num1); // reminder
// console.log(num1 === num2);
// console.log(Infinity > num1);
// Boolean
const bool0 = true;
const bool1 = false;
// Null & undefined - пустота
let empty;
// console.log(empty); //=> undefined   
const nl = null;
// console.log(nl); //=> undefined   
// Non-primitive types: 
// Objects
const person = {
    // key: value
    name: 'John',
    age: 25,
    isMarried: false
};
// console.log(person.age); //=> get value from object by key
// Arrays          0        1         2
const fruits = ['apple', 'orange', 'cherry'];
// console.log(fruits[2]); //=> get element from array
// console.log(typeof fruits); //=> detect type of variable
// type conversions
let x = 1;
// console.log(typeof x)
x = String(x); // '1'
// console.log(typeof x)
x = Boolean(x); // true
// console.log(typeof x)
x = Number(x); // 1
// console.log(typeof x)
// falsy values: null, 0, undefined, false, ''
// let someone = prompt("Please enter your name");
// console.log(Boolean(someone))
// if (someone) {
//   alert("Hello " + someone + "! How are you today?");
// } else {
//   alert("You don't know?");
// }
const input = document.querySelector('.input');
const buttonCancel = document.querySelector('.button-cancel');
const buttonOk = document.querySelector('.button-ok');
input === null || input === void 0 ? void 0 : input.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
        proccessInput();
    }
});
buttonCancel === null || buttonCancel === void 0 ? void 0 : buttonCancel.addEventListener('click', () => {
    alert('cancel');
});
buttonOk === null || buttonOk === void 0 ? void 0 : buttonOk.addEventListener('click', proccessInput);
function proccessInput() {
    const response = input === null || input === void 0 ? void 0 : input.value;
    console.log('ok clicked', response);
    if (!response) {
        alert('cancel');
    }
    else if (isNaN(+response)) {
        alert('incorrect');
    }
    else if (+response > 0) {
        alert("1");
    }
    else if (+response < 0) {
        alert("-1");
    }
    else {
        alert("0");
    }
}
