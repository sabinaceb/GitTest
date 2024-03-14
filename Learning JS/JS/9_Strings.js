//STRINGS
const simpleString = 'I am string';
const simpleString2 = "I am string too";
const templateString = `I am template string: ${simpleString}`;
console.log(simpleString);
console.log(simpleString2);
console.log(templateString);

//Length property
const simpleString3 = 'I am string';
console.log(simpleString3.length); // 11

//charAt()
const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;
console.log(`The character at index ${index} is ${sentence.charAt(index)}`); //output: "The character at index 4 is q"

//Ex. 1
const str = 'My first string';
console.log(str[0]); //numeration begin with 0
console.log(str.charAt(0));
console.log(str.length);