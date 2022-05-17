
function shortestStepsToNum(num){
    let steps = 0
    while(num >= 2){
        num % 2 === 0 ? num /= 2 : num -= 1;
        steps ++
    }
    return steps
}