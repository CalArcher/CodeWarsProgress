
function disemvowel(str){
    let vowels = ['a','e','i','o','u','A','E','I','O','U']
    let s = Array.from(str).filter(e => {
        if(vowels.includes(e) === false){
            return e
        }
    }).join('')
    return s
}