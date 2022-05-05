
function findMaxRange(ranges){
    let justNums = []
    for(let i = 0; i<ranges.length; i++){
        let holder = ranges[i].split(' ').filter(e => {
            if (e.toLowerCase() === e.toUpperCase() || e == 0){
                return e
            }
        }).map(e => {return Number(e)})
        justNums.push(holder)
    }
    let maxRange = []
    let sum = []
    for(let i = 0; i<justNums.length; i++){
        sum.push(Math.abs(justNums[i][0] - justNums[i][1]))
    }
    let sumSort = sum.slice(0).sort((a,b) => b-a)
    for(let i = 0; i<sum.length; i++){
        if(sumSort[0] == sum[i]){
            maxRange.push(ranges[i])
        }
    }
    return maxRange
}