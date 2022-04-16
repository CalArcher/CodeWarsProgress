function amountOfPages(s){
    let str = ''
    for (let i = 1; i <= s; i++){
        str += i
        if (str.length >= s){
            str = i
            break
        }
    }
    return str
}