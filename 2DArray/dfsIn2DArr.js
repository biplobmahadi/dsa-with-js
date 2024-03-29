const isDirection = (arr, row, col) => {
  if (arr[row]) {
    return arr[row][col] ? true : false
  }
  return false
}

const isVisited = (visitedList, row, col) => {
  for (let i = 0; i < visitedList.length; i++) {
    if (visitedList[i].row === row && visitedList[i].col === col) {
      return true
    }
  }

  return false
}

const dfsIn2DArr = (arr, row, col, list, visitedList) => {
  list.push(arr[row][col])
  visitedList.push({ row, col })

  if (isDirection(arr, row - 1, col) && !isVisited(visitedList, row - 1, col)) {
    return dfsIn2DArr(arr, row - 1, col, list, visitedList)
  }
  if (isDirection(arr, row, col + 1) && !isVisited(visitedList, row, col + 1)) {
    return dfsIn2DArr(arr, row, col + 1, list, visitedList)
  }
  if (isDirection(arr, row + 1, col) && !isVisited(visitedList, row + 1, col)) {
    return dfsIn2DArr(arr, row + 1, col, list, visitedList)
  }
  if (isDirection(arr, row, col - 1) && !isVisited(visitedList, row, col - 1)) {
    return dfsIn2DArr(arr, row, col - 1, list, visitedList)
  }
  return list
}

const arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
]

// console.log(dfsIn2DArr(arr, 0, 0, [], []))

const dfsIn2DArrOptimal = (arr) => {
  const list = []
  const visitedList = new Array(arr.length)
    .fill(0)
    .map(() => new Array(arr[0].length).fill(false))

  dfsOptimal(arr, 0, 0, visitedList, list)

  return list
}

const dfsOptimal = (arr, row, col, visitedList, list) => {
  if (
    row < 0 ||
    row >= arr.length ||
    col < 0 ||
    col >= arr[0].length ||
    visitedList[row][col]
  )
    return

  list.push(arr[row][col])
  visitedList[row][col] = true

  dfsOptimal(arr, row - 1, col, visitedList, list)
  dfsOptimal(arr, row, col + 1, visitedList, list)
  dfsOptimal(arr, row + 1, col, visitedList, list)
  dfsOptimal(arr, row, col - 1, visitedList, list)
}

console.log(dfsIn2DArrOptimal(arr))
