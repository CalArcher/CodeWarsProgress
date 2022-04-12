
function solve(n){
    let remainder = n
    let counter = 0
    for (let i =1; i < 100; i++){
        if (remainder < 10){
            break
        }
        if (remainder >= 500){
            remainder = remainder - 500
            counter++
        }else if (remainder >= 200){
            remainder = remainder - 200
            counter++
        }else if (remainder >= 100){
            remainder = remainder - 100
            counter++
        }else if (remainder >= 50){
            remainder -= 50
            counter++
        }else if (remainder >= 20){
            remainder -= 20
            counter++
        }else if(remainder >= 10){
            remainder -= 10
            counter++
        }
    }
    return remainder > 0 ? -1 : counter
}