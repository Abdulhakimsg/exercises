//Challenge : sum all primes
//Expected run : Pass in a numbe to loop up to and all add prime numbers
//Prime number is a number greater than 1 whose factor are 1 and itself
function sumAllPrimes(num){
    let total = 0

    function checkForPrime(i){
        for(let j = 2 ; j < i ; j++){
            if(i % j === 0){
                return false
            }
        }
        return true
    }

    for( let i = 2 ; i <= num ; i++){
        if (checkForPrime(i)){
            total += i ;
        }
    }
    return total
}

console.log(sumAllPrimes(10))