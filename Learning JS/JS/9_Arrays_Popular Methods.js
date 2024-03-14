//POPULAR METHODS
//##################################################################
//join()
let arrJoin = ["Hello", "World!"];
let resultJoin = arrJoin.join(" ");
console.log(resultJoin);
// Output: "Hello World!"
//Ex. 1
const substrings = ['JavaScript', 'Phyton', 'Go'];
const defaultSeparator = substrings.join();
const spaceSeparator = substrings.join(' ');
const semicolonSeparator = substrings.join(' ; ');
console.log('defaultSeparator', defaultSeparator);
console.log('spaceSeparator', spaceSeparator);
console.log('semicolonSeparator', semicolonSeparator);


//##################################################################
//includes()
let strIncludes = "Hello, World!";
let resultIncludes = strIncludes.includes("World");
console.log(resultIncludes);
// Output: true
//Ex. 2
const arrIncludes = [1,2,3];
console.log('Does arr include 1: ', arrIncludes.includes(1));
console.log('Does arr include 5: ', arrIncludes.includes(5));
console.log('Does arr include 5: ', arrIncludes.includes('5'));


//##################################################################
//indexOf() return index (position)
let arrIndexOf = ["Hello", "World!"];
let resultIndexOf = arrIndexOf.indexOf("World!");
console.log(resultIndexOf); //position of the coincidence
// Output: 1
//Ex. 1
const animals = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(animals.indexOf('bison')); //1 (position of the 1st coincidence)
console.log(animals.indexOf('bison', 2)); //start from index 2. Output: 4 (position of the 1st coincidence)
console.log(animals.indexOf('giragge')); //-1 the element is not present


//##################################################################
//push() add elements to the end of the array
let arrPush = ["Hello", "World!"];
arrPush.push("How", "are", "you?");
console.log(arrPush);
// Output: ["Hello", "World!", "How", "are", "you?"]
//Ex. 1
const arrPush1 = [1,2,3];
arrPush1.push(4);
console.log('First push: ', arrPush1);
arrPush1.push(5,6,7);
console.log('Second push: ', arrPush1);


//##################################################################
//pop() removes the last element of the array
let arrPop = ["Hello", "World!", "How", "are", "you?"];
let poppedElement = arrPop.pop();
console.log(poppedElement);
// Output: "you?"
console.log(arrPop);
// Output: ["Hello", "World!", "How", "are"]
//Ex. 2
const arrPop2 = [1,2,3,4,5];
console.log('Pop 1: ',arrPop2.pop());
console.log('Pop 2: ',arrPop2.pop());
console.log('Array: ',arrPop2);



//##################################################################
//unshift() add elements at the begining of the array
let arrUnshift = ["World!", "How", "are", "you?"];
arrUnshift.unshift("Hello");
console.log(arrUnshift);
// Output: ["Hello", "World!", "How", "are", "you?"]
//Ex. 1
const arrUnshift1 = [1,2,4];
arrUnshift1.unshift(4);
console.log('First unshift:', arrUnshift1); //4,1,2,3
arrUnshift1.unshift(5,6,7);
console.log('Second unshift: ',arrUnshift1); //5,6,7,4,1,2,3


//##################################################################
//shift() removes the first element of the array
let arrShift = ["Hello", "World!", "How", "are", "you?"];
let shiftedElement = arrShift.shift();
console.log(shiftedElement);
// Output: "Hello"
console.log(arrShift);
// Output: ["World!", "How", "are", "you?"]
//Ex. 1
const arrShift1 = [1,2,3,4,5];
console.log('Shift: ',arrShift1.shift());
console.log('Array: ', arrShift1);


//##################################################################
//forEach() 3 Parameters: current element, index, arr (2nd and 3rd are optional)
let arrForEach = ["Hello", "World!", "How", "are", "you?"];
arrForEach.forEach(function(element, index) {
  console.log(index, element);
});
// Output:
// 0 'Hello'
// 1 'World!'
// 2 'How'
// 3 'are'
// 4 'you?'
//Ex. 1
const arrayOfName = ['Alice', 'Jack', 'John', 'Jane', 'Bob'];
//simple way
arrayOfName.forEach(name => console.log(name));
//second parameter
arrayOfName.forEach((name, index) => {
    return console.log(`Element index: ${index}, Element value: ${name}`);
});
//third pamater
arrayOfName.forEach((name, index, arr) => {
    return console.log(`Index: ${index}, Value: ${name}, Array: ${arrayOfName}`);
});


//##################################################################
//slice() 2 Parameters: star index, end index (optional). The end index is not included on the slice
let arrSlice1 = ["Hello", "World!", "How", "are", "you?"];
let slicedArr1 = arrSlice1.slice(1, 3);
console.log(slicedArr1);
// Output: ["World!", "How"]
let arrSlice2 = ["Hello", "World!", "How", "are", "you?"];
let slicedArr2 = arrSlice2.slice(2);
console.log(slicedArr2);
// Output: ["How", "are", "you?"]
//Ex. 1
const animals2 = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const lastThreeElements = animals2.slice(2);
console.log(lastThreeElements);  //[ 'camel', 'duck', 'elephant' ]
const TwoElements = animals2.slice(2, 4);
console.log(TwoElements); //[ 'camel', 'duck' ]
const leftToRight = animals2.slice(-2);
console.log(leftToRight); //[ 'duck', 'elephant' ]
const leftToRight2 = animals2.slice(1, -1);
console.log(leftToRight2); //[ 'bison', 'camel', 'duck' ]


//##################################################################
//splice() change the order of an array, by replacing/removing or adding element
//3 Parameters start (mandatory) change, delete count (how many), elemet to update
let arrSplice1 = ["Hello", "World!", "How", "are", "you?"];
let removedSplice1 = arrSplice1.splice(1, 2, "there");
console.log(removedSplice1);
// Output: ["World!", "How"]
console.log(arrSplice1);
// Output: ["Hello", "there", "are", "you?"]
let arrSplice2 = ["Hello", "World!", "How", "are", "you?"];
let removedSplice2 = arrSplice2.splice(2);
console.log(removedSplice2);
// Output: ["How", "are", "you?"]
console.log(arrSplice2);
// Output: ["Hello", "World!"]
//Ex. 1
const animals3 = ['ant', 'bison', 'elephant'];
const camel = 'camel';
animals3.splice(1, 0, camel); //index to insert, delete count so no deleting elements, element to add
console.log(animals3); //[ 'ant', 'camel', 'bison', 'elephant' ]
//Ex. 2
const animals4 = ['ant', 'bison', 'elephant'];
const camel2 = 'camel';
animals4.splice(1, 1, camel2); //start in index 1, remove the index 1, add the element
console.log(animals4); //[ 'ant', 'camel', 'elephant' ]
//Ex. 3
const animals5 = ['ant', 'bison', 'elephant'];
const camel3 = 'camel';
const cat = 'cat';
animals5.splice(1, 0, camel3, cat); //start in index 1, doesn't remove, add the two element
console.log(animals5); //[ 'ant', 'camel', 'cat', 'bison',  'elephant' ]
//Ex. 4
const animals6 = ['ant', 'bison', 'elephant'];
animals6.splice(1, 2); //no elements to be added
console.log(animals6); //[ 'ant' ]


//##################################################################
//reverse()
let arrReverse = ["Hello", "World!", "How", "are", "you?"];
arrReverse.reverse();
console.log(arrReverse);
// Output: ["you?", "are", "How", "World!", "Hello"]


//##################################################################
//sort()
let arrSort1 = ["Banana", "Apple", "Cherry", "Date"];
arrSort1.sort();
console.log(arrSort1);
// Output: ["Apple", "Banana", "Cherry", "Date"]
let arrSort2 = [40, 100, 1, 5, 25, 10];
arrSort2.sort(function(a, b) {
  return a - b;
});
console.log(arrSort2);
// Output: [1, 5, 10, 25, 40, 100]


//##################################################################
//map()
let arrMap = [1, 2, 3, 4, 5];
let newArrMap = arrMap.map(function(num) {
  return num * 2;
});
console.log(newArrMap);
// Output: [2, 4, 6, 8, 10]


//##################################################################
//every()
let arrEvery = [10, 20, 30, 40, 50];
let resultEvery = arrEvery.every(function(num) {
  return num >= 10;
});
console.log(resultEvery);
// Output: true


//##################################################################
//filter()
let arrFiter1 = [1, 2, 3, 4, 5, 6];
let newArrFilter1 = arrFiter1.filter(num => num % 2 === 0);
console.log(newArrFilter1);
// Output: [2, 4, 6]


//##################################################################
//find()
let arrFound = [1, 2, 3, 4, 5, 6];
let found = arrFound.find(num => num > 3);
console.log(found);
// Output: 4


//##################################################################
//some()
let arrSome = [1, 2, 3, 4, 5];
let resultSome = arrSome.some(num => num > 3);
console.log(resultSome);
// Output: true


//##################################################################
//reduce()
let arrReduce = [1, 2, 3, 4, 5];
let sumReduce = arrReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sumReduce);
// Output: 15