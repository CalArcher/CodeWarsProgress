function last(x){
    let sortedByLast = x.split(' ').sort((a, b) => a[a.length - 1].localeCompare(b[b.length -1]));
    if(x == undefined) return null
    return sortedByLast
}