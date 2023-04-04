const arr = [3, 5, 32, 43, 11, 6, 1, 7, 4, 9, 0]

const bubbleSort = (arr) => {
  const len = arr.length
  for (let i = len; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = tmp
      }
    }
  }
  return arr
}

console.log(bubbleSort(arr))
