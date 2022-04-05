function upArray(arr){
    let nullCount = 0
    if (arr.length == 0){
        nullCount += 1
    }
    arr.forEach(x => {
        if (x < 0 || x.toString().length != 1){
            nullCount += 1
        }
    })
    if(nullCount > 0){
        return null
    }else{
    let toStrAddOne = Array.from((BigInt(arr.join('')) + 1n).toString())
    toStrAddOne = toStrAddOne.map((num) => {
        return Number(num)
    })
    return toStrAddOne
    }
}