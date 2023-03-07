const arr1 = [5, 7, 12, 32, 43]
const arr2 = [2, 4, 6]

const mergeTwoSortedArr = (arr1, arr2) => {
  const sortedArr = []
  let i = 0
  let j = 0

  while (arr1[i] || arr2[j]) {
    if (arr1[i]) {
      if (arr1[i] > arr2[j]) {
        sortedArr.push(arr2[j])
        j++
      } else {
        sortedArr.push(arr1[i])
        i++
      }
    } else {
      sortedArr.push(arr2[j])
      j++
    }
  }

  return sortedArr
}

console.log(mergeTwoSortedArr(arr1, arr2))
