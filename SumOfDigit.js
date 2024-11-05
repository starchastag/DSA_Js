//SumOfDigit.js

//1256 = 1+2+5+6 =14;


/*
1256/10 = rem = 6️⃣
125/10=  rem = 5️⃣
12/10 = rem=2️⃣

*/

function sumOfDigit(num){
    let sum=0;
    while(num>0){
        sum +=num%10;
        num = Math.floor(num/10);
    }
    return sum;
}
console.log(sumOfDigit(1256))