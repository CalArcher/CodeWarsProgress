function ascendDescend(len, min, max) {
  if (min > max) {
    return ''
  }
  if (min === max) {
    const same = min.toString()
    return same.repeat(len)
  }

  let output = ''
  let count = min
  let direction = 1

  while (output.length < len) {
    output += count
    if (direction === 1) {
      count++
    } else if (direction === -1) {
      count--
    }
    if (count === max) {
      direction = -1
    } else if (count === min) {
      direction = 1
    }
  }
  return output.slice(0, len)
}

// while output less than length
// count variable
// direciton variable, each time touches min or max, changes direciton
// if direct === up, add to count
// each time, add count to output string
