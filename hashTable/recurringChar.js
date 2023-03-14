const arr = [2, 4, 6, 2, 5, 4, 8]
const arr2 = [2, 1, 1, 2, 5, 4, 8]
const arr3 = [0, 1, 2, 0, 4]

const recurringChar = (arr) => {
  const iterattedEl = {}
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i]
    if (iterattedEl[el] === arr[i]) {
      return arr[i]
    }
    iterattedEl[el] = arr[i]
  }
}

const res = recurringChar(arr3)
console.log(res)
