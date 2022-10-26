function arrayDiffVeryFast(a, b) {
  const noDup = new Set(b)
  let output = a.filter((a) => {
    return !noDup.has(a)
  })
  return output
}
