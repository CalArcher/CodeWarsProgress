function digital_root(n){
    console.log(n)
    let reduced = n
    while(reduced > 9){
        reduced = reduced.toString().split('').map(e => {
        return e = Number(e)
    }).reduce((e,i) => e + i)
    }
    return reduced
}
