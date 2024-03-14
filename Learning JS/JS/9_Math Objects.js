//MATH ROUND
let number1 = 5.49;
let rounded1 = Math.round(number1); // rounded1 is 5
let number2 = 5.5;
let rounded2 = Math.round(number2); // rounded2 is 6
let number3 = -5.5;
let rounded3 = Math.round(number3); // rounded3 is -5
console.log(rounded1); // Outputs: 5
console.log(rounded2); // Outputs: 6
console.log(rounded3); // Outputs: -5
//Ex. 1
let num1 = 2.7
console.log(Math.round(num1)); //3
num1 = 2.4;
console.log(Math.round(num1)); //2


//MATH FLOOR
let number4 = 3.95;
let floored1 = Math.floor(number4); // floored1 is 3
let number5 = 4.75;
let floored2 = Math.floor(number5); // floored2 is 4
console.log(floored1); // Outputs: 3
console.log(floored2); // Outputs: 4
//Ex. 1
let num2 = 2.7
console.log(Math.floor(num2)); //2
num2 = 2.4
console.log(Math.floor(num2)); //2


//MATH CEIL
let number6 = 2.3;
let ceiled1 = Math.ceil(number6); // ceiled1 is 3
let number7 = 2.8;
let ceiled2 = Math.ceil(number7); // ceiled2 is 3
console.log(ceiled1); // Outputs: 3
console.log(ceiled2); // Outputs: 3
//Ex. 1
let num3 = 2.7
console.log(Math.ceil(num3)); //3
num3 = 2.4
console.log(Math.ceil(num3)); //3


//MATH RANDOM
function getRandomNumber(max) {
    return Math.round(Math.random() * max);
}
console.log(getRandomNumber(10)); // a number between 0 and 10
//Ex. 1
console.log(Math.random()); //random float number between 0-1
console.log(Math.random() * 10); //random float number between 1-10
console.log(Math.round(Math.random() * 10)); //random integer number between 1-10