function beeramid(bonus, price){
    let cans = bonus/price
    let rows = 0
    for (let i = 1; i < 100; i++){
        let x = i**2
        if(cans - x >= 0){
            cans -= x
            rows ++
        }else{
            break
        }
    }
    return rows
}