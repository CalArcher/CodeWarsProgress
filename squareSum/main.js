function squareSum(numbers){
    let ans = 0
    for(let i = 0; i<numbers.length; i++){
        ans += numbers[i]**2
    }
    return ans
}