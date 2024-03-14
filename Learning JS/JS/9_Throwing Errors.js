//THROWING ERRORS
function double(number) {
    if (typeof number !== 'number') throw new Error('This is not a number!');
    return number * 2;
}

try {
    console.log(double(5)); //10
    console.log(double('not a number')); //This is not a number!
} catch (error) {
    console.error(error.message);
}


