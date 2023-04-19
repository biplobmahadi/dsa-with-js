class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
      return this
    }
    let currentNode = this.root
    while (true) {
      if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode
          return this
        }
        currentNode = currentNode.right
      } else {
        if (!currentNode.left) {
          currentNode.left = newNode
          return this
        }
        currentNode = currentNode.left
      }
    }
  }

  lookup(value) {
    // check necessary things
    let currentNode = this.root
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode
      }
      if (currentNode.value < value) {
        currentNode = currentNode.right
      } else {
        currentNode = currentNode.left
      }
    }
  }

  remove(value) {
    // check necessary things
    let prevNode = null
    let currentNode = this.root
    while (currentNode) {
      if (value > currentNode.value) {
        prevNode = currentNode
        currentNode = currentNode.right
        this.findAndRemove(value, prevNode, currentNode, 'right')
      } else if (value < currentNode.value) {
        prevNode = currentNode
        currentNode = currentNode.left
        this.findAndRemove(value, prevNode, currentNode, 'left')
      } else {
        currentNode = null
      }
    }
    return this
  }

  findAndRemove(value, prevNode, currentNode, currentNodedirectionWithPrev) {
    if (currentNode.value === value) {
      if (currentNode.left === null && currentNode.right === null) {
        currentNode = null
        prevNode[currentNodedirectionWithPrev] = null
      } else if (currentNode.left === null && currentNode.right) {
        prevNode[currentNodedirectionWithPrev] = currentNode.right
        currentNode = null
      } else if (currentNode.left && currentNode.right === null) {
        prevNode[currentNodedirectionWithPrev] = currentNode.left
        currentNode = null
      } else {
        let leftOfCurrent = currentNode.left
        if (leftOfCurrent.right) {
          let prevMax = leftOfCurrent
          let maxNode = leftOfCurrent.right
          while (maxNode.right) {
            prevMax = maxNode
            maxNode = maxNode.right
          }
          if (maxNode.left) {
            prevMax.right = maxNode.left
            maxNode.right = currentNode.right
            maxNode.left = currentNode.left
            prevNode[currentNodedirectionWithPrev] = maxNode
            currentNode = null
          } else {
            prevMax.right = null
            maxNode.right = currentNode.right
            maxNode.left = currentNode.left
            prevNode[currentNodedirectionWithPrev] = maxNode
            currentNode = null
          }
        } else {
          leftOfCurrent.right = currentNode.right
          prevNode[currentNodedirectionWithPrev] = leftOfCurrent
          currentNode = null
        }
      }
    }
  }

  bfsIterative() {
    const result = []
    const queue = [this.root]

    while (queue.length > 0) {
      const item = queue.shift()
      result.push(item.value)

      if (item.left) {
        queue.push(item.left)
      }
      if (item.right) {
        queue.push(item.right)
      }
    }
    return result
  }

  bfsRecursive(queue, result) {
    if (!queue.length) return result

    const item = queue.shift()
    result.push(item.value)

    if (item.left) queue.push(item.left)
    if (item.right) queue.push(item.right)

    return this.bfsRecursive(queue, result)
  }

  dfsInOrder(node, list) {
    if (node.left) this.dfsInOrder(node.left, list)
    list.push(node.value)
    if (node.right) this.dfsInOrder(node.right, list)
    return list
  }

  dfsPreOrder(node, list) {
    list.push(node.value)
    if (node.left) this.dfsPreOrder(node.left, list)
    if (node.right) this.dfsPreOrder(node.right, list)
    return list
  }

  dfsPostOrder(node, list) {
    if (node.left) this.dfsPostOrder(node.left, list)
    if (node.right) this.dfsPostOrder(node.right, list)
    list.push(node.value)
    return list
  }

  dfsPreOrderIterative() {
    const stack = []
    const result = []

    stack.push(this.root)

    while (stack.length) {
      const node = stack.pop()
      result.push(node.value)

      if (node.right) stack.push(node.right)
      if (node.left) stack.push(node.left)
    }

    return result
  }

  dfsInOrderIterative() {
    const stack = []
    const result = []

    let currentNode = this.root

    while (stack.length || currentNode) {
      if (currentNode) {
        stack.push(currentNode)
        currentNode = currentNode.left
      } else {
        const poppedNode = stack.pop()
        result.push(poppedNode.value)
        if (poppedNode.right) {
          currentNode = poppedNode.right
        }
      }
    }

    return result
  }

  dfsPostOrderIterative() {
    const stack = []
    const result = []

    let currentNode = this.root
    let visitedNode = null

    while (stack.length || currentNode) {
      if (currentNode) {
        stack.push(currentNode)
        currentNode = currentNode.left
      } else {
        const peakedNode = stack[stack.length - 1]
        if (peakedNode.right && peakedNode.right !== visitedNode) {
          currentNode = peakedNode.right
        } else {
          const poppedNode = stack.pop()
          result.push(poppedNode.value)
          visitedNode = poppedNode
        }
      }
    }

    return result
  }
}

const bst = new BST()
bst.insert(9)
bst.insert(4)
bst.insert(6)
bst.insert(20)
bst.insert(170)
bst.insert(15)
bst.insert(1)
bst.insert(2)
bst.insert(8)
bst.insert(7)
// bst.insert(16)
// bst.insert(18)
// bst.insert(17)

// bst.remove(20)

// console.log(bst.bfsIterative())
// console.log(bst.bfsRecursive([bst.root], []))

// console.log(bst.dfsPreOrder(bst.root, []))
// console.log(bst.dfsInOrder(bst.root, []))
console.log(bst.dfsPostOrder(bst.root, []))

// console.log(bst.dfsPreOrderIterative())
// console.log(bst.dfsInOrderIterative())
console.log(bst.dfsPostOrderIterative())

// console.log(bst.root.right.left)
