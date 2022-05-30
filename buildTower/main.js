function towerBuilder(n){
    let tower = []
    let counter = 1
    let end = 2*n -1
    for(let i = 1; i <= n; i++){
        let spaces = n % 2 === 0 ? (end - counter + 1) / 2 : (end - counter) / 2
        let floor = spaces > 0 ? ' '.repeat(spaces) + '*'.repeat(counter) + ' '.repeat(spaces) : '*'.repeat(counter)
        tower.push(floor)
        counter += 2
    }
    return tower
}