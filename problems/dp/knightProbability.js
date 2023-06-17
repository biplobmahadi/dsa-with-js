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
  if (r < 0 || r >= n || c < 0 || c >= n) return 0
  if (k === 0) return 1

  let sum = 0
  for (let i = 0; i < DIRECTIONS.length; i++) {
    sum +=
      knightProbability(n, k - 1, r + DIRECTIONS[i][0], c + DIRECTIONS[i][1]) /
      8
  }
  return sum
}

console.log(knightProbability(3, 2, 0, 0))
