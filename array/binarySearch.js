const arr = [-3, -1, 0, 2, 4, 6, 7, 23, 43, 122]

const binarySearch = (arr, element) => {
  let low = 0
  let high = arr.length

  while (high >= low) {
    const mid = Math.floor((low + high) / 2)

    if (arr[mid] === element) return mid
    if (arr[mid] > element) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return -1
}

const binarySearchRecursive = (arr, element, low, high) => {
  if (low > high) return -1
  const mid = low + high

  if (arr[mid] === element) return mid

  if (arr[mid] > element)
    return binarySearchRecursive(arr, element, low, mid - 1)

  return binarySearchRecursive(arr, element, mid + 1, high)
}

console.log(binarySearch(arr, 7))
console.log(binarySearchRecursive(arr, 7, 0, arr.length - 1))
