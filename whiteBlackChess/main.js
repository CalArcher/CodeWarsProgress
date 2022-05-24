function whiteBlackAreas(cols,rows){
    let totalArea = cols.reduce((sum, n) => sum + n, 0) * rows.reduce((sum, n) => sum + n, 0)
    let whiteArea = 0
    let evenCols = cols.filter((_,i) => i % 2 === 0)
    let evenRows = rows.filter((_,i) => i % 2 === 0)
    let evenRowsSum = evenRows.reduce((sum, n) => sum + n, 0)
    let oddCols = cols.filter((_,i) => i % 2 != 0)
    let oddRows = rows.filter((_,i) => i % 2 != 0)
    let oddRowsSum = oddRows.reduce((sum, n) => sum + n, 0)
    whiteArea = evenCols.reduce((sum, n) => sum + (n * evenRowsSum),whiteArea) + oddCols.reduce((sum, n) => sum + (n * oddRowsSum), whiteArea)
    return [whiteArea, totalArea - whiteArea]
}