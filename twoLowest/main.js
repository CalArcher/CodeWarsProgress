//practicing with loops instead of .sort()
function sumTwoSmallestNumbers(n){
    let smallOne = n[0]
    let smallTwo = n[1]
    for(let i = 2; i<n.length; i++){
        if(n[i] < smallOne){
            if(smallTwo > smallOne){
                smallTwo = smallOne
            }
            smallOne = n[i]
        }else if(n[i] < smallTwo){
            smallTwo = n[i]
        }
    }
    return smallOne+smallTwo
}