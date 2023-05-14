const arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
]

const bfsIn2DArrOptimal = (arr) => {
  const list = []
  const visitedList = new Array(arr.length)
    .fill(0)
    .map(() => new Array(arr[0].length).fill(false))

  const queue = [{ row: 2, col: 2 }]
  bfs(arr, visitedList, list, queue)

  return list
}

const bfs = (arr, visitedList, list, queue) => {
  if (!queue.length) return

  const popped = queue.shift()
  const row = popped.row
  const col = popped.col
  if (!visitedList[row][col]) {
    list.push(arr[row][col])
    visitedList[row][col] = true
  }

  pushToQueue(arr, row - 1, col, visitedList, queue)
  pushToQueue(arr, row, col + 1, visitedList, queue)
  pushToQueue(arr, row + 1, col, visitedList, queue)
  pushToQueue(arr, row, col - 1, visitedList, queue)

  bfs(arr, visitedList, list, queue)
}

const pushToQueue = (arr, row, col, visitedList, queue) => {
  if (
    row >= 0 &&
    col >= 0 &&
    row < arr.length &&
    col < arr[0].length &&
    !visitedList[row][col]
  ) {
    queue.push({ row, col })
  }
}

console.log(bfsIn2DArrOptimal(arr))
