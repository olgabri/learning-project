// https://javascript.info/logical-operators#check-the-login
let first = prompt("Who's there?")

if (first === 'Admin') {
  let second = prompt('Password')
  
  if (second === 'TheMaster') {
    alert('Welcome')
  } else if (second === null) {
    alert ('Cancelled')
  } else {
    alert ('Wrong password')
  }
} else if (first === null) {
  alert('Cancelled')
} else {
  alert ("I don't know")
}