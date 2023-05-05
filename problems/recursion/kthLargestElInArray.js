const findKthLargest = (arr, k) => {
  const indexOfRes = arr.length - k
  quickSort(arr, 0, arr.length - 1)
  return arr[indexOfRes]
}

const quickSort = (arr, left, right) => {
  if (left < right) {
    const pivot = getPivot(arr, left, right)
    quickSort(arr, left, pivot - 1)
    quickSort(arr, pivot + 1, right)
  }
}

const getPivot = (arr, left, right) => {
  let i = left
  let pivotEl = arr[right]

  for (let j = left; j < right; j++) {
    if (arr[j] < pivotEl) {
      swap(arr, i, j)
      i++
    }
  }

  swap(arr, i, right)

  return i
}

const swap = (arr, i, j) => {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

// Using Hoare's Quick Select Algo
const findKthLargestOptimal = (arr, k) => {
  const index = arr.length - k
  return quickSelect(arr, 0, arr.length - 1, index)
}

const quickSelect = (arr, left, right, kthSmallest) => {
  if (left < right) {
    const pivot = getPivot(arr, left, right)
    if (pivot === kthSmallest) {
      return arr[kthSmallest]
    } else if (pivot < kthSmallest) {
      return quickSelect(arr, pivot + 1, right, kthSmallest)
    } else {
      return quickSelect(arr, left, pivot - 1, kthSmallest)
    }
  }
}

const arr = [7, 6, 5, 4, 3, 2, 1]
// console.log(findKthLargest(arr, 2)) // O(n logn) & O(logn)
console.log(findKthLargestOptimal(arr, 5)) // O(n) & O(1) -> TCO

/* For both in worst case time is O(n^2), when arr is given in descending order */
