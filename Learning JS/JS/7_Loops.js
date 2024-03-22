//#########################################################
//#########################################################
//L O O P S
for (let step = 0; step < 5; step++) {
    // Run 5 times, with values of step 0 through 4.
    console.log('Walking east one step');
  }
  
  //############################
  //WHILE
  let num4 = 50;
  while (num4 < 55) {
    console.log(num4);
    num4++;
  }
  
  //Ex. 1
  let sum = 0;
  let i = 0;
  //while (i < 0) {
  while (i < 5) {
    i++;
    sum += i;
  }
  console.log(sum); //15
  
  //############################
  //DO WHILE
  let num5 = 50;
  do {
    console.log(num5);
    num5++;
  } while (num5 < 45);
  
  //Ex. 1
  let sum1 = 0;
  let j = 0;
  do {
    j++;
    sum1 += j;
  } while ( j < 5);
  //} while ( j < 0);
  console.log(sum1); //15
  
  
  //############################
  //FOR
  for (let i = 0; i < 8; i++) {
    console.log(i);
  }
  
  // Example (breaking a loop)
  for (let i = 0; i < 8; i++) {
    if (i == 6) {
      break; //finish the execution
    }
    console.log(i);
  }
  
  // Example (continue loop execution)
  for (let i = 0; i < 8; i++) {
    if (i == 6) {
      continue; //skips 6
    }
    console.log(i);
  }
  
  //Ex. 1
  let sum2 = 0;
  for (let i = 0; i < 6; i++) {
    sum2 += i;
  }
  console.log(sum2);
  
  //Ex. 2
  const arr = [1, 2, 3, 4, 5];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  
  //Ex. 3
  let sum3 = 0;
  const arr2 = [1, 2, 3, 4, 5];
  for (let i = 0; i < arr2.length; i++) {
    sum3 += arr2[i];
  }
  console.log(sum3);
  
  
  //############################
  //FOR... IN
  //For objects
  const person = {
    firstName: 'John',
    lastName: 'Dou',
    age: 30,
  }
  for (let key in person) { //for (<value_type> key in <object_name>) { ... }
    console.log(key, person[key]) //print: <name_key> <object>.<key_value> = firstName John ...
  };
  // firstName John
  // lastName Dou
  // age 30
  
  //Ex. 1
  const obj = {
    name: "John",
    lastName: "Doe"
  };
  for (let key in obj) { //for (<value_type> key in <object_name>) { ... }
    console.log(key); //only the <name_key>, name \n lastName
    console.log(obj[key]); //only the <object>.<key_value>, John \n Doe
  }
  
  
  //############################
  //FOR... OF
  const arrayOfNumber = [1,2,3,4,5];
  for (let el of arrayOfNumber){ //for (<value_type> el of <arrary_name>) { ... } mientras existan elementos dentro del objeto de elementos
    console.log(el);
  }
  // 1
  // 2
  // 3
  // 4
  // 5
  
  //Ex. 1
  const array = [1,2,3,4,5];
  let suma = 0;
  for (let el of array){ //for (<value_type> el of <arrary_name>) { ... }
    suma += el;
  }
  console.log(suma);