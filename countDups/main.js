function duplicateCount(t){
    let dup = Array.from(t.toLowerCase())
    let noDup = Array.from(new Set(dup))
    let count = 0
    for(let i = 0; i<noDup.length; i++){
        let fCount = 0
        for (let j = 0; j<dup.length; j++){
            if(noDup[i] === dup[j]){
                fCount++
            }
        }
        if(fCount>1){
            count++
        }
    }
    return count
}