// Example (hoisting)
showMessage('Hello World!!!');
function showMessage(text) {
  console.log(text);
}

// Example (let and scope)
let num = 10;
function showMessage(text) { //se sobre-escribe la funcion, entre mas abajo mayor prioridad
  let num = 1;
  console.log(num);
  console.log(text);
}

showMessage('hello!!'); // 1
console.log(num); // 10

// Example
function calc(a, b) {
  return a + b;
}
console.log(calc(2, 5)); // 7
console.log(calc(3, 2)); // 5

// Example with Hosisting
console.log(calc2(2,6));
const calc2 = function(a, b) {
    return a + b;
}


// Example
function returnValue() {
  let num = 50;
  return num;
}

let anotherNum = returnValue();
console.log(anotherNum); // 50




//############################################
// Example of Function Expression
const calc = function(a, b) {
    return (a + b);
}
console.log(calc(2,5));



//############################################
// Example of IIFE
(function (){
    console.log('Hello World!')
})() // Output: Hello World!

// Example of IIFE with parameters
const myFunc = (function (name){
    return 'Hello ' + name
})('World!')
console.log(myFunc); // Output: Hello World!

//Ex. 2
(function (name){
    console.log(`Hello ${name}`);
})('Jack');