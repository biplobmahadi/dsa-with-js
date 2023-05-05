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

const binarySearch = (arr, left, right, target) => {
  while (right >= left) {
    const mid = Math.floor((left + right) / 2)
    if (arr[mid] === target) return mid
    else if (arr[mid] > target) right = mid - 1
    else left = mid + 1
  }

  return -1
}

const searchRangeOptimal = (arr, target) => {
  if (arr.length === 0) return [-1, -1]
  const targetIndex = binarySearch(arr, 0, arr.length - 1, target)
  if (targetIndex === -1) return [-1, -1]

  let start = targetIndex,
    end = targetIndex
  let tmpStart, tmpEnd

  while (start !== -1) {
    tmpStart = start
    start = binarySearch(arr, 0, start - 1, target)
  }
  start = tmpStart

  while (end !== -1) {
    tmpEnd = end
    end = binarySearch(arr, end + 1, arr.length - 1, target)
  }
  end = tmpEnd

  return [start, end]
}

const arr = [1, 2, 3, 4, 5, 5, 6, 7]
const arr2 = [5, 5, 5, 5, 5, 5, 5, 5]
console.log(searchRangeOptimal(arr, 5))
