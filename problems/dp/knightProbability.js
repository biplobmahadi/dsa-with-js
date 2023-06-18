const DIRECTIONS = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
]

const knightProbability = (n, k, r, c) => {
  const dp = new Array(k + 1)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array(n).fill(undefined)))

  return recurse(n, k, r, c, dp)
}
const recurse = (n, k, r, c, dp) => {
  if (r < 0 || r >= n || c < 0 || c >= n) return 0
  if (k === 0) return 1

  if (dp[k][r][c] !== undefined) return dp[k][r][c]

  let sum = 0
  for (let i = 0; i < DIRECTIONS.length; i++) {
    sum += recurse(n, k - 1, r + DIRECTIONS[i][0], c + DIRECTIONS[i][1], dp) / 8
  }
  dp[k][r][c] = sum
  return dp[k][r][c]
}

// console.log(knightProbability(3, 2, 0, 0))

const knightProbabilityBottomUp = (n, k, r, c) => {
  const dp = new Array(k + 1)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array(n).fill(0)))

  dp[0][r][c] = 1

  for (let step = 1; step <= k; step++) {
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        for (let i = 0; i < DIRECTIONS.length; i++) {
          const dir = DIRECTIONS[i]
          const prevRow = row + dir[0]
          const prevCol = col + dir[1]

          if (prevRow >= 0 && prevCol >= 0 && prevRow < n && prevCol < n) {
            dp[step][row][col] += dp[step - 1][prevRow][prevCol] / 8
          }
        }
      }
    }
  }

  let sum = 0
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      sum += dp[k][row][col]
    }
  }

  return sum
}

console.log(knightProbabilityBottomUp(3, 2, 0, 0)) // O(k.n^2) & O(k.n^2)
