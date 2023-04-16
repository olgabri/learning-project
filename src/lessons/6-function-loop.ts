function add(a: number, b: number) {
    console.log(a + b)
}
  
let index = 0
let arg1 = 1
let arg2 = 2

while (index < 3) {
    add(arg1, arg2)
    index = index + 1
    arg1 = arg1 + 2
    arg2 = arg2 + 2
}
  
