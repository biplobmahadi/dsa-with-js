class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value)
    this.first = newNode
    this.last = this.first
  }

  enqueue(value) {
    const newNode = new Node(value)
    this.last.next = newNode
    this.last = newNode
    return this
  }

  dequeue() {
    this.first = this.first.next
    return this
  }

  peak() {
    return this.first
  }
}

const myQueue = new Queue(4)
myQueue.enqueue(5)
myQueue.enqueue(6)
myQueue.dequeue()

console.log(myQueue.first)
