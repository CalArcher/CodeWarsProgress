function arrAdder(arr) {
    let combStr = ''
    for (let i = 0; i < arr[2].length; i++){
        console.log(arr[i].length)
        if (i > 0){
            combStr += ' '
        }
        for (let j = 0; j < arr.length; j++){
            combStr += arr[j][i]
        }
    }
    console.log(combStr)
    return combStr
}