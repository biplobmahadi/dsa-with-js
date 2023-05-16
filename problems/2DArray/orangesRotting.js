const orangesRotting = (grid) => {
  if (!grid.length) return 0
  if (!grid[0].length) return 0
  let fresh = {
    total: 0,
  }
  const queue = []

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 2) queue.push({ row, col })
      if (grid[row][col] === 1) fresh.total = fresh.total + 1
    }
  }

  let countMinute = 0
  let len = queue.length

  while (queue.length) {
    if (len === 0) {
      countMinute++
      len = queue.length
    }
    const popped = queue.shift()
    pushToQueue(grid, queue, popped.row - 1, popped.col, fresh)
    pushToQueue(grid, queue, popped.row, popped.col + 1, fresh)
    pushToQueue(grid, queue, popped.row + 1, popped.col, fresh)
    pushToQueue(grid, queue, popped.row, popped.col - 1, fresh)

    len--
  }

  if (fresh.total) return -1

  return countMinute
}

const pushToQueue = (grid, queue, row, col, fresh) => {
  if (row >= 0 && col >= 0 && row < grid.length && col < grid[0].length) {
    if (grid[row][col] === 1) {
      queue.push({ row, col })
      grid[row][col] = 2
      fresh.total = fresh.total - 1
    }
  }
}

const grid = [
  [2, 1, 1, 0, 0],
  [1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1],
]

const grid2 = [
  [1, 1, 0, 0, 0],
  [2, 1, 0, 0, 0],
  [0, 0, 0, 1, 2],
  [0, 1, 0, 0, 1],
]

console.log(orangesRotting(grid2))
