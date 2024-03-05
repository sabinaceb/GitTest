function miniMaxSum(arr) {
    let min = 0;
    let max = 0;
    let x = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(j != i){
                x += arr[j];
            }
        }
        if(x >= max){
            max = x;
        }
        if(min > x || min == 0){
            min = x;
        }
        x = 0;
    }
    console.log(min + " " + max);
}

function main() {
    let arr = [5, 5, 5, 5, 5];
    // arr.forEach(ele => {
    //     console.log(ele)
    // });
    miniMaxSum(arr);
}

main();