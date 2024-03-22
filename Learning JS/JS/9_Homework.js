//valor de i dentro y fuera
let i = 10;
for (i=0; i<5; i++) {
  console.log(i);
}
console.log(i);


//Numeros primos
function primo(numero) {
    if (numero < 2) return false;
    for(let i = 2; i<numero; i++){
        if(numero%i === 0) {
            return false;
        }
    }
    return true;
}

for (let i=0; i<=100; i++) {
    if (primo(i)) {
        console.log(`El numero ${i} es primo`);
    } else {
        console.log(`El numero ${i} no es primo`);
    }
}


//suma de numeros
function suma(numero) {
    if(numero < 1) return console.log("Numero no valido.");
    let suma = 0;
    for(let i=1; i <= numero; i++) {
        suma += i;
    }
    console.log(`La suma es: ${suma}`);
}

suma(18);
