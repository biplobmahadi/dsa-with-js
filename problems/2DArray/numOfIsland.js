const numIsLands = (grid) => {
  let i = 0
  let j = 0
  let count = 0

  while (i < grid.length && j < grid[0].length) {
    // console.log(grid[i][j])
    if (grid[i][j]) {
      count = count + 1
      bfs(grid, i, j)
    }

    if (j === grid[0].length - 1) {
      i++
      j = 0
    } else j++
  }

  return count
}

const bfs = (grid, row, col) => {
  const queue = [{ row: row, col: col }]

  while (queue.length) {
    const popped = queue.shift()
    grid[popped.row][popped.col] = 0
    pushToQueue(grid, popped.row - 1, popped.col, queue)
    pushToQueue(grid, popped.row, popped.col + 1, queue)
    pushToQueue(grid, popped.row + 1, popped.col, queue)
    pushToQueue(grid, popped.row, popped.col - 1, queue)
  }
}

const pushToQueue = (grid, row, col, queue) => {
  if (
    row >= 0 &&
    col >= 0 &&
    row < grid.length &&
    col < grid[0].length &&
    grid[row][col]
  ) {
    queue.push({ row, col })
  }
}

const grid = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 1, 1],
]
const grid2 = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
  [0, 1, 1, 1, 0],
  [1, 0, 1, 0, 1],
]

console.log(numIsLands(grid2))
