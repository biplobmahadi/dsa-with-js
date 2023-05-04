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

const arr = [23, 4, 5, 1, 6, 8, 0, 1, 9, 2, 0, 24]
console.log(findKthLargest(arr, 2))
console.log(arr)
