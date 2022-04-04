function findOdd(a) {
    
    for (let i = 0; i < a.length; i++){
        let numOfTimes = 0
        let el1 = a[i]
        for (let j = 0; j < a.length; j++){
            let el2 = a[j]
            if (el1 == el2){
                numOfTimes += 1
            }
        }
        if (numOfTimes % 2 > 0){
            return el1
        }
    }
}