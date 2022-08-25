function findOutlier(integers) {
  let even = []
  let odd = []
  let last = integers[0]
  for (let i = 0; i < integers.length; i++) {
    //determines if current element is even or odd
    if (integers[i] % 2 === 0) {
      even.push(integers[i])
    } else {
      odd.push(integers[i])
    }
    //checks whether odd or even outlier has been found
    if (even.length > 0 && odd.length > 0) {
      let oddOneOut = determineLength(even, odd)
      if (oddOneOut != undefined) {
        return oddOneOut
      }
    }
  }
}

//helper function, decides if even or odd array is outlier
function determineLength(e, o) {
  if (e.length > o.length) {
    return o[0]
  } else if (o.length > e.length) {
    return e[0]
  }
}
