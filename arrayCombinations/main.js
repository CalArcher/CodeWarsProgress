function solve(arr) {
  let output = 1
  for (let i = 0; i < arr.length; i++) {
    const curr = new Set(arr[i])
    output *= curr.size > 0 ? curr.size : 1
  }
  return output
}
