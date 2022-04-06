function insertDash(num){
    num = num.toString().split('')
    let s = num.map((item, index) => {
        if (item % 2 > 0 && (num[index + 1]) % 2 > 0){
            return item + '-'
        }else {
            return item
        }
        
    })
    return s.join('')
}