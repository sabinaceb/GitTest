let str = 'holi';
str = 5;
console.log(str);

//let
function ejemplo () {
    let ejemploLet = 1;
    if (true) {
        let ejemploLet2 = 2;
        console.log(ejemploLet); //1
    }
    //console.log(ejemploLet2); //undefined
}
ejemplo();

//HOISTING
(function () {
    varHoist = 3; //permite el hoisting
    console.log(varHoist);
    var varHoist; //hoisting, primero asigno valor, y luego defino

    // letHoist = 2; //let no permite el hoistin
    // console.log(letHoist);
    // let letHoist;

    // console.log(constHoist); //undefined
    // const constHoist = 1;
})();