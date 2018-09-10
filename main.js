'use strict';

function isPrime(num){
    var l = Math.sqrt(num)
    for(var i = 2;i<=l;i++){
        if(0 == num%i){
            return false
        }
    }
    return true
}

function printPrimes(fromNum,toNum){
    if (fromNum < 2){
        fromNum = 2
    }
    for (var i = fromNum; i <= toNum; i++) {
        if (isPrime(i)) {
            console.log(i)
        }
    }
}

//console.log(typeof('Hello, world.'));
console.log('print start')
printPrimes(1000,3999)
console.log('print end')