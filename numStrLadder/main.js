function pattern(n) {
    let s = '*', nStr = ''
    for (let i = 0; i < n; i++){
        if (i == 0){
            nStr += '1' 
        }else if(i === (n-1)){
            nStr += ('\n1' + s.repeat(i)+ (i+1))
        }else{
           nStr += ('\n1' + s.repeat(i)+ (i+1))
        }
    }
    return nStr
}