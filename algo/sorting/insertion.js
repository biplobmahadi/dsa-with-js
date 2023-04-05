const arr = [5, 12, 222, 3, 5, 34, 2, 6, 97, 2, 8, 1, 0, 7, 0]

const insertionSort = (arr) => {
  const len = arr.length
  for (let i = 1; i < len; i++) {
    let position

    if (arr[0] > arr[i]) {
      arr.unshift(arr.splice(i, 1)[0])
    } else {
      for (let j = 1; j < i; j++) {
        if (arr[j] >= arr[i] && arr[j - 1] <= arr[i]) {
          position = j
        }
      }
    }

    // In tutorial there maybe time complexity is O(n^4)
    // here is O(n^2) by refactoring
    if (position) {
      const gotEl = arr.splice(i, 1)[0]
      arr.splice(position, 0, gotEl)
    }
  }
  return arr
}

console.log(insertionSort(arr))
