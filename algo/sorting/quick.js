const arr = [2, 5, 34, 104, 1, 4, 0, 2, 9, 9, 3]

const divide = (arr, pivotPosition) => {
  const arr1 = arr.slice(0, pivotPosition) // O(n)
  const arr2 = arr.slice(pivotPosition + 1) // O(n)
  return { arr1, arr2 }
}

const addTogether = (arr1, arr2, pivot) => {
  return [...arr1, pivot, ...arr2] // O(n), // space O(n)
}

const quickSort = (arr) => {
  const len = arr.length
  let pivotPosition = len - 1

  let i = 0
  while (i < pivotPosition) {
    // O(n)
    if (arr[i] > arr[pivotPosition]) {
      const tmp = arr[i]
      arr[i] = arr[pivotPosition - 1]
      arr[pivotPosition - 1] = arr[pivotPosition]
      arr[pivotPosition] = tmp
      pivotPosition--
    } else {
      i++
    }
  }

  if (arr.length <= 3) {
    return arr
  }

  const { arr1, arr2 } = divide(arr, pivotPosition) // space O(n)

  return addTogether(quickSort(arr1), quickSort(arr2), arr[pivotPosition]) // O(log n)
}

// space complexity is not satisfied

// console.log(quickSort(arr))

const getPivotIndex = (arr, left, right) => {
  let i = left
  let j = left
  let pivot = right

  while (i < pivot) {
    if (arr[j] > arr[pivot]) j++
    else {
      if (j === pivot) {
        const tmp = arr[i]
        arr[i] = arr[pivot]
        arr[pivot] = tmp
        pivot = i
      } else {
        const tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
        i++
        j++
      }
    }
  }
  return pivot
}

const quickSortDifferently = (arr, left, right) => {
  if (left >= right) return

  const pivotIndex = getPivotIndex(arr, left, right) // O(n)
  quickSortDifferently(arr, left, pivotIndex - 1) // O(logn)
  quickSortDifferently(arr, pivotIndex + 1, right) // O(logn)

  return arr
}

const ar = [2, 5, 34, 104, 1, 4, 0, 2, 9, 9, 3]
console.log(quickSortDifferently(ar, 0, ar.length - 1)) // O(n logn) && O(logn) -> space for recursive stack
