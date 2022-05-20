function isPrime(n){
    let squareRoot = n ** .5
    for(let i = 2; i <= squareRoot; i++){
        if(n % i === 0){
            return false
        }
    }
    return n > 1
}