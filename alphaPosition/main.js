function alphabetPosition(text){
    text = text.toUpperCase()
    let numbers = ''
    for(let i = 0; i<text.length; i++){
        let letter = text.charCodeAt(i) - 64
        if(letter > 0 && letter < 27){
            numbers += ' ' + letter
        }
    }
    return numbers.slice(1, numbers.length)
}