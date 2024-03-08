//Block designed to execute a particular task

//#########################################
//DECLARATION
//Ex. 1 wihout arguments
function sayHello() { //function <function_name> (<arguments>) {}, can no contain arguments
    console.log("Hello");
}
sayHello(); //execute the function

//Ex. 2 with arguments
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 4));

//Ex. 2 with arguments but undefined
function sum(a, b) {
    a + b; //no return
}
console.log(sum(3, 4));

//Ex. 3 Hoisting
console.log(sum(3, 4)); //call it before its declaration
function sum(a, b) {
    //a + b; //no return
    return a + b;
}

//#########################################
//EXPRESION
//creation happens in the context of the assignement expression = FUNCTION EXPRESSION
const sum = function(a, b) {
    return a + b;
}
console.log(sum(2, 6));

//Hoist
console.log(sum(2, 6)); //error, we can't access before the inicialization = The function created in the expression syntex is not hoisted
const sum = function(a, b) {
    return a + b;
}


//#########################################
//IIFE = self executeing anonnymouos function
//executed after it is defined
(function () {
    console.log("Hello");
})();

//Ex. 1 with arguments
//when we have many functions for may source files, so we can use it when we don't need use again the function
(function (name) {
    console.log(`Hello ${name}`);
})('Sabina');


//#########################################
//DEFAULT PARAMETERS
function sum(a, b) {
    console.log('a is: ', a); //undeined
    console.log('b is: ', b); //undefined
    return a + b;
}
console.log("The result is ", sum()); //NaN

//Ex. 1 default parameters
function sum(a = 0, b = 0) {
    console.log('a is: ', a); //0
    console.log('b is: ', b); //0
    return a + b;
}
console.log("The result is ", sum()); //0

//Ex. 2 one argument
function sum(a = 0, b = 0) {
    console.log('a is: ', a); //2
    console.log('b is: ', b); //0
    return a + b;
}
console.log("The result is ", sum(2)); //2

//Ex. 3 two arguments
function sum(a = 0, b = 0) {
    console.log('a is: ', a); //2
    console.log('b is: ', b); //5
    return a + b;
}
console.log("The result is ", sum(2, 5)); //7


//#########################################
//ARROW FUNCTIONS
//No keyword 'function'
//NOT hoisted, can't be used as contructors
//Has no 'this'
//Ex. 1 Normal function
const sum = function(a, b) {
    return a + b;
}
console.log(sum(5, 6));

//Ex. 1 Arrow function
const sum = (a, b) => a + b;
console.log(sum(5, 6));

//Ex. 2 Normal with arguments
const double = function(a) {
    return a * 2;
}
console.log(double(5));

//Ex. 2 Arrow with arguments
const double2 = (a) => a * 2;
console.log(double2(5));

//Ex. 3 Normal no arguments
const sayHello = function() {
    console.log("Hello");
}
sayHello();

//Ex. 3 Arrow no arguments
const sayHello = () => console.log("Hello");
sayHello();


//#########################################
//CLOSURES
function makeFunction() { //outer function
    let a = 1;
    //closure
    return function() { //inner function
        console.log('a is: ' + a);
    }
}
const func = makeFunction(); 
func(); //accessing the variable a that is outside of the inner function

//Ex. 1 normal function
function counter() {
    let a = 0;
    return a++;
} 
console.log(counter()); //0, new variable every time we call the function
console.log(counter()); //0
console.log(counter()); //0
console.log(counter()); //0

//Ex. 1 with clousure
function makeCounter() {
    let a = 0;
    return function(){
        return a++;
    }
} 
const counter2 = makeCounter();
console.log(counter2()); //0
console.log(counter2()); //1
console.log(counter2()); //2
console.log(counter2()); //3

//Ex. 1 with clousure and arguments
function makeCounter(a) {
    return function(){
        return a++;
    }
} 
const counter3 = makeCounter(4);
console.log(counter3()); //4
console.log(counter3()); //5
console.log(counter3()); //6
console.log(counter3()); //7


//#########################################
//METHODS
//Ex. 1
const person = {
    firstName: "John",
    lastName: "Doe",
    say: function() {
        console.log("Hello");
    }
}
console.log(person.firstName); //John
person.say(); //Hello

//Ex. 1 short syntex
const person2 = {
    firstName: "John",
    lastName: "Doe",
    say() { //function keyword removed
        console.log("Hello");
    }
}
console.log(person2.firstName); //John
person2.say(); //Hello

//Ex. 2 refer to object attributes
const person3 = {
    firstName: "John",
    lastName: "Doe",
    say() { //function keyword removed
        console.log(`Hello ${this.firstName}`); 
    }
}
console.log(person3.firstName); //John
person3.say(); //Hello John