function birthdayCakeCandles(candles) {
    let x = 0;
    let y = 0;
    let sum = 0;
    for(let i=0; i<candles.length; i++){
        if(i == 0){
            x = candles[i];
            y = x;             
            sum += 1;
        }else{
            if(candles[i] >= x){
                if(candles[i] > x){
                    sum = 0;                    
                    x = candles[i];
                    y = x;
                    sum += 1;
                }else{
                    x = candles[i];
                    y = x;
                    sum += 1;
                }
            }
        }
    }
    console.log(sum);
}

function main() {
    let candles = [18, 90, 90, 13, 90, 75, 90, 8, 90, 43];
    // arr.forEach(ele => {
    //     console.log(ele)
    // });
    birthdayCakeCandles(candles);
}

main();