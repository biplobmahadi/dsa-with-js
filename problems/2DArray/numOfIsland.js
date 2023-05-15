const numIsLands = (grid) => {
  let i = 0
  let j = 0
  let count = 0

  while (i < grid.length && j < grid[0].length) {
    // console.log(grid[i][j])

    if (j === grid[0].length - 1) {
      i++
      j = 0
    } else j++
  }
}

const grid = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 1, 1],
]

console.log(numIsLands(grid))
