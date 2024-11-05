var isPailndrom = function(x){
    let copyNum =x,reversNum=0;
    while(copyNum > 0){
        const lastDigit = copyNum%10;
        reversNum=reversNum*10 + lastDigit;
        copyNum = Math.floor(copyNum/10)
    }
    return x == reversNum;
}
console.log(isPailndrom(121));