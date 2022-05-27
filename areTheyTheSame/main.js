function comp(arr1, arr2){
    if(arr1 === null || arr2 === null) return false;
    let sortedSquared = arr1.map(e => e**2)
    sortedSquared.sort((a,b) => a - b)
    arr2.sort((a,b) => a - b)
    for(let i = 0; i < arr2.length; i++){
        if(arr2[i] != sortedSquared[i]){
            return false
        }
    }    
    return true
}