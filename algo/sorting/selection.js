const arr = [3, 5, 2, 6, 8, 1, 0, 7]

const selectionSort = (arr) => {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    let smallestIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[smallestIndex] > arr[j]) {
        smallestIndex = j
      }
    }
    const tmp = arr[i]
    arr[i] = arr[smallestIndex]
    arr[smallestIndex] = tmp
  }
  return arr
}

console.log(selectionSort(arr))
