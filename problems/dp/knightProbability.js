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

console.log(knightProbability(3, 2, 0, 0))
