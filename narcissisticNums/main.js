function isNarcissistic(n){
    let numToArr = n.toString().split('').map(e => Number(e))
    let l = numToArr.length
    let sum = 0
    numToArr.forEach(e => {
        sum += e**l
    })
    return sum === n 
}