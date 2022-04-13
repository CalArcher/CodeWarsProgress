function unusedDigits(...args){
    arr = Array.from(new Set(args.join(''))).join('')
    let unused = ''
    for (let i =0; i < 10; i++){
        if(arr.indexOf(i) == -1){
            unused += i
        }
    }
    return unused
}