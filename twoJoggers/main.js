let nbrOfLaps = function (x,y){
    for (let i = x; i <= x*y; i+=x){
        if(i % y === 0){
            return [i/x, i/y]
        }
    }
}