const levelOrderNode = (root) => {
  if (!root) return []

  const res = []
  const queue = [root] // consider push, shift as O(1)
  let levelCount = 1
  let count = 0
  let arr = []

  while (queue.length) {
    const node = queue.shift()
    levelCount--
    arr.push(node.value)
    if (node.left) {
      queue.push(node.left)
      count++
    }
    if (node.right) {
      queue.push(node.right)
      count++
    }
    if (levelCount === 0) {
      levelCount = count
      count = 0
      res.push(arr)
      arr = []
    }
  }

  return res
}
