function moveZeros(arr){
    let s = arr.filter(el => el !== 0)
    let diff = arr.length - s.length
    for (let i = 0; i < diff; i++){
        s.push(0)
    }
    return s
}