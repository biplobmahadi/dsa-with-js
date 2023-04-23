const arr = [1, 7, 2, 8, 1, 6]

// Brute force
const maxArea = (arr) => {
  const len = arr.length
  let max = 0

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const minOfTwo = Math.min(arr[i], arr[j])
      const width = j - i
      const area = minOfTwo * width

      if (area > max) max = area
    }
  }

  return max
}

const maxAreaOptimized = (height) => {
  let maxArea = 0
  let i = 0
  let j = height.length - 1

  while (j > i) {
    const minOfTwo = Math.min(height[i], height[j])
    const width = j - i
    const area = minOfTwo * width
    maxArea = Math.max(maxArea, area)

    if (minOfTwo === height[i]) i++
    else j--
  }

  return maxArea
}

console.log(maxArea(arr))
console.log(maxAreaOptimized(arr))
