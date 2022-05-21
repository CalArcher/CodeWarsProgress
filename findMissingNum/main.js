function missingNo(n){
    n = n.sort((a,b) => a - b)
    for (let i = 0; i <= n.length; i++){
        if(n[i] != i){
            return i 
        }
    }
}

//Time complexity is 2 + n.length, space complexity is linear 