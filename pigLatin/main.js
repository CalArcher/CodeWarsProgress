//solution if punctuation is NOT allowed 
function pigIt(str){
    let s = str
    s = s.split(' ').map(word => {
        return word.substring(1) + word.substring(0,1) + 'ay' 
    })
    return s.join(' ')
}

//solution if punctuation IS allowed 
function pigIt(str){
    let a = str.split(' ')
    let punctuations = [".", ",", ":", ";", "!", "?"]
    let l = a.length
    for (let i = 0; i < l; i++){
        let m = a[i].length
        if (punctuations.indexOf(a[i][m - 1]) == -1){
            a[i] = a[i].slice(1) + a[i][0] + 'ay'
        }else if(m == 1){
            a[i] = a[i]
        }
        else{
            a[i] = a[i].slice(1) + a[i][0] + 'ay' + a[i][m-1]
            a[i] = a[i].replace(a[i][a[i].length -1], '')
        }
    }
    return a.join(' ')
}