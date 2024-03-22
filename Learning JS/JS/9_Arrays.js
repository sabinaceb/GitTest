// Ways to create an Array in JavaScript
const arrayLiteral = [1,2,3]; //literal
const arrayConstructorElements = new Array(1,2,3); //constructor with elements
const arrayConstructorLength = new Array(5); //constructor with length
const arrayOf = Array.of(1,2,3);// Array.of method
console.log(arrayLiteral);
console.log(arrayConstructorElements);
console.log(arrayOf);
console.log(arrayConstructorLength);

//Array elements
const arr = [1,2,3];
console.log(arr);
const firstElement = arr[0]; //1
console.log(firstElement);
arr[2] = 4; //[1,2,4]
console.log(arr);

//Array properties
const arr = [1,2,3];
const len = arr.length; //3
console.log(len);