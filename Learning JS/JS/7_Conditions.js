//INTRO
//C O N D I T I O N S
if(true) {
    // this block of code will be executed
}

if(false) {
// this block of code will NOT be executed
}


//############################
//IF... ELSE
if (2 * 4 == 8) {
  console.log('That is right!');
} else {
  console.log('Wrong!');
}

//Ex. 2
const x = 5;
if (x === 5) {
  console.log('This is true');
}
if (x == 6) {
  console.log('I am here');
}

//Ex. 3
const y = 5;
if (y === 5) {
  console.log('This is true');
}
console.log('I am here');

//Ex. 4
const z = 5;
if (z === 5) console.log('This is true');

//Ex. 5
const w = 5;
if (w === 6) {
  console.log('This is true');
} else {
  console.log('Else statement');
}
console.log('I am here');


//############################
//ELSE IF
let num = 50;
if (num < 49) {
  console.log('Wrong!');
} else if (num > 100) {
  console.log('Too much!');
} else {
  console.log('That is right!');
}

//Ex. 1
/** 
 * 18-25 -> 18%
 * 26-40 -> 20%
 * 41-99 -> 30%
 */
const age = 20;
if (age >= 18 && age <= 25) {
  console.log('18%');
} else if (age >= 26 && age <= 40) {
  console.log('20%');
}else if (age >= 40 && age <= 99) {
  console.log('30%');
} else {
  console.log('Error');
}


//############################
//TERNARY OPERATOR
const a = 3;
const b = 5;
const c = (a > b) ? a - b : a + b; //<if_validation> ? <true_condition> : <false_condition>
console.log(c); // 8

//Ex. 1
const num1 = 5;
if (num1 === 5) {
  console.log('true');
} else {
  console.log('false');
}

//Ex. 2
const num2 = 5;
(num2 === 5) ? console.log('true') : console.log('false'); //<if_validation> ? <true_condition> : <false_condition>


//############################
//Switch
const num3 = 50;
switch (num3) {
  case 50:
    console.log('fifty!');
    break;
  case 60:
    console.log('sixty');
    break;
  case 70:
    console.log('seventy');
    break;
  default:
    console.log('Default behaviour');
    break;
}

//Ex. 1
const title = 'Junior';
//const title = 'Senior';
//const title = 'asdasdasds';
switch (title) {
  case 'Junior':
    console.log('You are junior');
    break;
  case 'Middle':
    console.log('You are Middle');
    break;
  case 'Senior':
    console.log('You are Senior');
    break;
  default:
    console.log('Sorry, I do not know who you are');
    break;
}
