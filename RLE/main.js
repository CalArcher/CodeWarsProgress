function runLengthEncoding(str){
    str = str.split('')
    let smaller = [], prev, count
    for(let i = 0; i<=str.length; i++){
        if(str[i] !== prev){
            smaller.push([count, prev])
            prev = str[i]
            count = 1
        }else{
            count ++
        }
    }
    smaller.shift()
    return smaller
}