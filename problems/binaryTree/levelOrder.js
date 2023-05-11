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

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class MyQueue {
  constructor() {
    this.first = null
    this.last = null
  }

  enqueue(value) {
    const newNode = new Node(value)
    if (this.last) {
      this.last.next = newNode
      this.last = newNode
    } else {
      this.first = newNode
      this.last = this.first
    }
  }

  dequeue() {
    const popped = this.first
    if (popped) {
      this.first = this.first.next
      if (this.first === null) this.last = null
    }
    return popped
  }

  empty() {
    return this.first === null
  }
}
