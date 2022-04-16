function slicesToName(n){
    if (n.toString() === n){
        return null
    }
    let b = 'bread '
    let s = 'sandwich '
    let str = ''
    if(n < 2 || isNaN(n) ){
        return null
    }
    else if (n % 2 === 0){
        n = n/2
        str = s.repeat(n)
    }
    else {
        n = (n - 1)/2
        str = b + s.repeat(n)
    }
    return str.slice(0,-1)
}
function nameToSlices(name){
    if (isNaN(name)){
    let s = name.toString().split(' ')
    if (s.filter(x => x == 'bread').length >1 || s.length < 2){
        return null
    }else if (s[0] != 'bread' && s.includes('bread') == true){
        return null
    }
    let bCount = 0
    let sCount = 0
    for (let i = 0; i < s.length; i++){
        if (s[i] === 'bread'){
            bCount++
        }else if (s[i] === 'sandwich'){
            sCount++
        }else{
            return null
        }
    }
    return (bCount+ (sCount*2))
    }
    else{
        return null
    }
}