const searchRange = (arr, t) => {
  let first
  let last

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === t) {
      if (first >= 0) {
        last = i
      } else {
        first = i
      }
    }
  }

  if (first >= 0) {
    if (last >= 0) return [first, last]
    else return [first, first]
  } else {
    return [-1, -1]
  }
}

const searchRangeOptimal = (arr, t) => {}
