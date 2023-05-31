const minCostClimbingStairs = (cost) => {
  const n = cost.length

  return Math.min(minCost(n - 1, cost), minCost(n - 2, cost))
}

const minCost = (i, cost) => {
  if (i < 0) return 0
  if (i === 0 || i === 1) return cost[i]

  return cost[i] + Math.min(minCost(i - 1, cost), minCost(i - 2, cost))
}

const cost = [2, 3, 5, 7, 9, 12, 43]
//2  3  7  10  16  22
console.log(minCostClimbingStairs(cost))
