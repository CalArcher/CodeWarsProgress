function remove(string){
    let sentenceWithPossibleSingleExclamationMarks = string.split(' ')
    let removedSingleExclamationMark = []
    for(let iterationVariable = 0; iterationVariable<sentenceWithPossibleSingleExclamationMarks.length; iterationVariable++){
        let first = sentenceWithPossibleSingleExclamationMarks[iterationVariable].indexOf('!'), last = sentenceWithPossibleSingleExclamationMarks[iterationVariable].lastIndexOf('!')
        if(first != last || first == -1 ){
            removedSingleExclamationMark.push(sentenceWithPossibleSingleExclamationMarks[iterationVariable])
        }
    }
    return removedSingleExclamationMark.join(' ')
}