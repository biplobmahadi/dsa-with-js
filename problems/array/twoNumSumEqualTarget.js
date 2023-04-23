const arr = [1, 4, 5, 3, 6, 9]

// Brute Force
const twoNumSumEqualTarget = (arr, target) => {
  const len = arr.length

  for (let i = 0; i < len; i++) {
    const comp = target - arr[i]

    for (let j = i + 1; j < len; j++) {
      if (comp === arr[j]) return [i, j]
    }
  }

  return null
}

const twoSumOptimized = (nums, target) => {
  const len = nums.length
  const hash = new Map()

  for (let i = 0; i < len; i++) {
    if (hash[nums[i]] !== undefined) return [hash[nums[i]], i]

    const comp = target - nums[i]
    hash[comp] = i
  }

  return null
}

console.log(twoNumSumEqualTarget(arr, 150))
console.log(twoSumOptimized(arr, 150))
