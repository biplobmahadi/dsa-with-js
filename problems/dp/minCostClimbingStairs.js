const minCostClimbingStairs = (cost) => {
  const n = cost.length
  if (n === 0) return 0
  if (n === 1) return cost[0]

  let dpOne = cost[0]
  let dpTwo = cost[1]

  for (let i = 2; i < n; i++) {
    const currentCost = cost[i] + Math.min(dpOne, dpTwo)
    dpOne = dpTwo
    dpTwo = currentCost
  }

  return Math.min(dpOne, dpTwo)
}

// function minCost(i, cost, dp) {
//   if (i < 0) return 0
//   if (i === 0 || i === 1) return cost[i]

//   if (!dp[i]) {
//     dp[i] =
//       cost[i] + Math.min(minCost(i - 1, cost, dp), minCost(i - 2, cost, dp))
//   }
//   return dp[i]
// }

const cost = [2, 3, 5, 7, 9, 12, 43]
//2  3  7  10  16  22
console.log(minCostClimbingStairs(cost))
