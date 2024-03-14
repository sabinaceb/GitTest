//POPULAR METHODS
//slice()
let str1 = 'My new string';
console.log(str1.slice(2)); // ' new string'
console.log(str1.slice(0,4)); // 'My n'
//Ex. 1
const s = 'My first string';
const myS = s.slice(3,7); //1er parametro donde corta y empieza el nuevo string, 2do donde termina de cortar
console.log(myS);
console.log(s);


//##################################################################
//trim()
let str2 = '   string   ';
console.log(str2.trim()); // 'string'
//Ex. 1
const s1 = '         My first       string          ';
const myS1 = s1.trim(); //Elimina los espacios al inicio y al final
console.log(myS1 + ': Hello');
console.log(s1);


//##################################################################
//toUpperCase()
let str3 = 'string';
console.log(str3.toUpperCase()); // 'STRING'
//Ex. 1
const s2 = 'my FIRST sTrIng';
const mySToUpper = s2.toUpperCase();
console.log(mySToUpper);
console.log(s2);


//##################################################################
//toLowerCase()
let str4 = 'STRING';
console.log(str4.toLowerCase()); // 'string'
//Ex. 1
const s3 = 'my FIRST sTrIng';
const mySToLower = s3.toLowerCase();
console.log(mySToLower);
console.log(s3);


//##################################################################
//split()
let str5 = "Hello";
let result = str5.split(""); //without character on the method, we indicate to separate each character
console.log(result); // Output: ["H", "e", "l", "l", "o"]
//Ex. 1  
const stringOfNames = 'John,Ann,Jack,Ray,Bob';
const arrayOfNames = stringOfNames.split(','); //character to split
console.log(stringOfNames);
console.log(arrayOfNames);


//##################################################################
//match()
const str6 = 'cost is $2345.87';
const costMatch = str6.match(/\$([\d\.]+)/);
const cost = costMatch[1];
console.log(costMatch);
/**
 [
  '$2345.87',
  '2345.87',
  index: 8,
  input: 'cost is $2345.87',
  groups: undefined
]
 */
console.log(cost); // 2345.87
//Ex. 1
const s4 = 'This IS my Test String IS is';
const re = /is/; //regular expresion /x/
console.log(s4.match(re));
const re2 = /is/g; //all matching results we add the g flag on the regular expression, 
console.log(s4.match(re2));
console.log(s4.match(re2).length); //cuantas ocurrencias con el lenght
const re3 = /is/gi; //ignore case, we add i flag, search insensitive
console.log(s4.match(re3));
console.log(s4.match(re3).length); //cuantas ocurrencias con el lenght
const re4 = s4.match(/is/gi); //array con todas las incidencias
const re5 = re4[1]; //solo la incidencia con index 1
console.log(re4); //array completo
console.log(re5); //incidencia en index 1


//##################################################################
//replace()
const simpleStrin4 = 'I am string';
const replacedString = simpleStrin4.replace('I am', 'You are');
const replacedStringRegexp = simpleStrin4.replace(/(I\sam)/, 'You are');
console.log(replacedString); // You are string
console.log(replacedStringRegexp); // You are string
//Ex. 1
const s5 = 'JAVA JS .NET JS JAVA java';
console.log(s5.replace('JAVA', 'JS')); //1st parameter = substring to be replaces, 2nd the replacement string, solo la 1era incidencia en mayus cambia
console.log(s5.replace(/JAVA/g, 'JS')); //actualiza todas las incidencias que estan en mayus
console.log(s5.replace(/JAVA/gi, 'JS')); //actualiza todas las incidencias que estan en mayus y minus
console.log(s5.replace(/java/gi, 'JS')); //igual que arriba
console.log(s5.replace(/JavA/gi, 'JS')); //igual que arriba