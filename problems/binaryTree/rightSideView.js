// O(n) & O(n)
const rightSideView = (root) => {
  if (!root) return []

  const queue = [root]
  const res = []

  while (queue.length) {
    const queueLength = queue.length
    let count = 0
    let currentNode

    while (count < queueLength) {
      currentNode = queue.shift()
      if (currentNode.left) queue.push(currentNode.left)
      if (currentNode.right) queue.push(currentNode.right)
      count++
    }

    res.push(currentNode.val)
  }

  return res
}
