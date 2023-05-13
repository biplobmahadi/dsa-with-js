const findHeight = (root) => {
  let count = 0
  let currentNode = root
  while (currentNode) {
    count++
    currentNode = currentNode.left
  }
  return count
}

const findMidNode = (nodeIndex, root, height) => {
  let left = 0
  let right = Math.pow(2, height - 1) - 1
  let currentNode = root
  while (left !== right) {
    const mid = Math.ceil((left + right) / 2)
    if (mid > nodeIndex) {
      currentNode = currentNode.left
      right = mid - 1
    } else {
      currentNode = currentNode.right
      left = mid
    }
  }
  return currentNode
}

const findLastLevelTotal = (height, root) => {
  let left = 0
  let right = Math.pow(2, height - 1) - 1
  while (left !== right) {
    const mid = Math.ceil((left + right) / 2)
    const midNode = findMidNode(mid, root, height)
    if (midNode) {
      left = mid
    } else {
      right = mid - 1
    }
  }
  return left + 1
}

const countNodes = (root) => {
  if (!root) return 0

  const height = findHeight(root)
  const totalWithoutLastLevel = Math.pow(2, height - 1) - 1
  const lastLevelTotal = findLastLevelTotal(height, root)

  return totalWithoutLastLevel + lastLevelTotal
}

const root = {
  val: 2,
  left: {
    val: 4,
    left: {
      val: 8,
      left: null,
      right: null,
    },
    right: {
      val: 10,
      left: null,
      right: null,
    },
  },
  right: {
    val: 6,
    left: null,
    right: null,
  },
}

console.log(countNodes(root))
