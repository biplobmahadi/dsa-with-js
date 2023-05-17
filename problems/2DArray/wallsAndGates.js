const wallsAndGates = (matrix) => {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        dfs(matrix, row, col, 0)
      }
    }
  }

  return matrix
}

const dfs = (matrix, row, col, step) => {
  if (
    row < 0 ||
    col < 0 ||
    row >= matrix.length ||
    col >= matrix[0].length ||
    matrix[row][col] < step
  )
    return

  matrix[row][col] = step

  dfs(matrix, row - 1, col, step + 1)
  dfs(matrix, row, col + 1, step + 1)
  dfs(matrix, row + 1, col, step + 1)
  dfs(matrix, row, col - 1, step + 1)
}

const matrix = [
  [Infinity, -1, 0, Infinity],
  [Infinity, Infinity, Infinity, -1],
  [Infinity, -1, Infinity, -1],
  [0, -1, Infinity, Infinity],
]
const matrix2 = [
  [Infinity, -1, 0, Infinity],
  [-1, Infinity, Infinity, -1],
  [Infinity, -1, Infinity, -1],
  [0, -1, Infinity, Infinity],
]

console.log(wallsAndGates(matrix2))
