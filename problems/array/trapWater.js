const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
const height2 = [4, 2, 0, 3, 2, 5]

const trapWater = (height) => {
  const len = height.length
  let totalWater = 0

  for (let i = 0; i < len; i++) {
    let leftMax = 0
    let rightMax = 0

    let p = i - 1
    while (p >= 0) {
      leftMax = Math.max(leftMax, height[p])
      p--
    }

    let q = i + 1
    while (q < len) {
      rightMax = Math.max(rightMax, height[q])
      q++
    }

    const currentWater = Math.min(leftMax, rightMax) - height[i]
    if (currentWater > 0) totalWater += currentWater
  }

  return totalWater
}

const trapWaterOptimal = (height) => {
  let i = 0,
    j = height.length - 1,
    maxLeft = 0,
    maxRight = 0,
    totalWater = 0

  while (i < j) {
    if (height[i] <= height[j]) {
      maxLeft = Math.max(maxLeft, height[i])
      const currentWater = maxLeft - height[i]
      totalWater += currentWater
      i++
    } else {
      maxRight = Math.max(maxRight, height[j])
      const currentWater = maxRight - height[j]
      totalWater += currentWater
      j--
    }
  }
  return totalWater
}

console.log(trapWater(height2))
console.log(trapWaterOptimal(height2))
