// O(n) & O(n)
const rightSideView = (root) => {
  if (!root) return []

  const queue = [root]
  const res = []

  while (queue.length) {
    const queueLength = queue.length
    let count = 0
    let lastNodeVal

    while (count < queueLength) {
      const node = queue.shift()
      lastNodeVal = node.val
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      count++
    }

    res.push(lastNodeVal)
  }

  return res
}
