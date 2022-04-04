function stickyCalc (operation, val1, val2){
    val1 = Math.round(val1)
    val2 = Math.round(val2)
    joinedVals = Number('' + val1 + val2)
    if (operation === '+'){
        return Math.round(joinedVals + val2)
    }else if (operation === '-'){
        return Math.round(joinedVals - val2)
    }else if (operation === '*'){
        return Math.round(joinedVals * val2)
    }else if (operation === '/'){
        return Math.round(joinedVals / val2)
    }
}