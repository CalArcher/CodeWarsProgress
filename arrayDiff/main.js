function arrayDiff(a, b){
    return a.filter(e => {
        if(b.includes(e) == false){
            return e
        }
    })
}