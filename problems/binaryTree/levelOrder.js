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

const levelOrder = (root) => {
  if (!root) return []

  const res = []
  const queue = new MyQueue()
  queue.enqueue(root)
  let levelCount = 1
  let count = 0
  let arr = []

  while (!queue.empty()) {
    const node = queue.dequeue()
    levelCount--
    arr.push(node.value.val)
    if (node.value.left) {
      queue.enqueue(node.value.left)
      count++
    }
    if (node.value.right) {
      queue.enqueue(node.value.right)
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

const root = {
  val: 3,
  left: {
    val: 4,
    left: null,
    right: null,
  },
  right: {
    val: 5,
    left: null,
    right: null,
  },
}

const levelOrderAnother = (root) => {
  if (!root) return []

  const res = []
  const queue = [root]

  while (queue.length) {
    const arr = []
    const lengthOfQueue = queue.length
    let count = 0

    while (count < lengthOfQueue) {
      const node = queue.shift()
      arr.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      count++
    }
    res.push(arr)
  }

  return res
}
console.log(levelOrderAnother(root))
