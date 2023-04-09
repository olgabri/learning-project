const bool = true
// console.log(typeof bool); //=> detect type of variable - boolean

// type conversions
let x: number | string | boolean = 1
// console.log(typeof x)
x = String(x) // '1'
// console.log(typeof x)
x = Boolean(x) // true or !!x
// console.log(typeof x)
x = Number(x) // 1
// console.log(typeof x)

// falsy values: null, 0, undefined, false, ''
