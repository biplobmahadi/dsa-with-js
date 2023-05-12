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

const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: {
        val: 7,
        left: {
          val: 8,
          left: null,
          right: null,
        },
        right: null,
      },
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
  right: {
    val: 5,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: null,
  },
}

const dfsPreOrder = (root, list) => {
  if (root === null) return
  list.push(root.val)
  if (root.right) dfsPreOrder(root.right, list)
  if (root.left) dfsPreOrder(root.left, list)
  return list
}
const dfsInOrder = (root, list) => {
  if (root === null) return
  if (root.right) dfsInOrder(root.right, list)
  list.push(root.val)
  if (root.left) dfsInOrder(root.left, list)
  return list
}
const dfsPostOrder = (root, list) => {
  if (root === null) return
  if (root.right) dfsPostOrder(root.right, list)
  if (root.left) dfsPostOrder(root.left, list)
  list.push(root.val)
  return list
}

const rightSideViewDFS = (root) => {}

console.log(dfsPreOrder(root, []))
console.log(dfsInOrder(root, []))
console.log(dfsPostOrder(root, []))
