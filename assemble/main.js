function assembleString(arr){
    console.log(arr, 'test')
    if(arr.length === 0){
        return ''
    }
    let word = arr[0].split('')
    let n = arr.map(el => {
        return el.split('')
    })
    console.log(n)
    for(let i = 0; i < n.length; i++){
        let next = n[i + 1]
        for(let j = 0; j < n[i].length; j++){
            let c = n[i][j]
            if (word[j] === '*'){
                word[j] = '#'
            }
            if(word[j] === '*' || word[j] === '#' && c != '*'){
                word[j] = c
            }else if(word[j] === '*' && c === '*'){
                word[j] = '#'
            }
            
        }
    }
    
    return word.join('')
}