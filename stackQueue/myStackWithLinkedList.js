class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class MyStackWithLinkedList {
  constructor(value) {
    const newNode = new Node(value)
    this.top = newNode
  }

  push(value) {
    const newNode = new Node(value)
    newNode.next = this.top
    this.top = newNode
    return this.top
  }

  pop() {
    const tmp = this.top.next
    this.top = tmp
    return tmp
  }

  peak() {
    return this.top
  }
}

const myStack = new MyStackWithLinkedList(2)
myStack.push(3)
myStack.push(4)
myStack.pop()
console.log(myStack.peak())
console.log(myStack.top)
