const arr = [4, 3, 9, 5, 1, 8, 2, 10, 2, 3, 4, 5, 0]

const merge = (arr1, arr2) => {
  const mergedArr = []
  let positionArr1 = 0
  let positionArr2 = 0
  while (arr1[positionArr1] !== undefined || arr2[positionArr2] !== undefined) {
    if (arr1[positionArr1]) {
      if (arr1[positionArr1] > arr2[positionArr2]) {
        mergedArr.push(arr2[positionArr2])
        positionArr2++
      } else {
        mergedArr.push(arr1[positionArr1])
        positionArr1++
      }
    } else {
      mergedArr.push(arr2[positionArr2])
      positionArr2++
    }
  }
  return mergedArr
}

const div = (arr, from, end) => {
  const newArr = []
  for (let i = from; i < end; i++) {
    newArr.push(arr[i])
  }
  return newArr
}

const mergeSort = (arr) => {
  const len = arr.length
  if (len === 1) return arr
  const arr1 = div(arr, 0, Math.floor(len / 2))
  const arr2 = div(arr, Math.floor(len / 2), len)
  const mergedArr = merge(mergeSort(arr1), mergeSort(arr2))
  return mergedArr
}

console.log(mergeSort(arr))
