class Stack {
  constructor() {
    this.data = []
    this.len = 0
  }

  peak() {
    return this.data[this.len - 1]
  }

  push(value) {
    this.data.push(value)
    this.len++
    return this
  }

  pop() {
    const res = this.data.pop()
    this.len--
    return res
  }
}

class MyQueueUsingStack {
  constructor() {
    const stack1 = new Stack()
    const stack2 = new Stack()
    this.stack1 = stack1
    this.stack2 = stack2
  }

  enqueue(value) {
    this.stack1.data.push(value)
    this.stack1.len++
    return this.stack1
  }

  dequeue() {
    const length = this.stack1.len
    for (let i = 0; i < length; i++) {
      const data = this.stack1.pop()
      this.stack2.push(data)
    }
    const res = this.stack2.pop()
    const lenght2 = this.stack2.len
    for (let i = 0; i < lenght2; i++) {
      const data = this.stack2.pop()
      this.stack1.push(data)
    }
    return res
  }

  peak() {
    const length = this.stack1.len
    for (let i = 0; i < length; i++) {
      const data = this.stack1.pop()
      this.stack2.push(data)
    }
    const res = this.stack2.peak()
    const lenght2 = this.stack2.len
    for (let i = 0; i < lenght2; i++) {
      const data = this.stack2.pop()
      this.stack1.push(data)
    }
    return res
  }
}

const myQueue = new MyQueueUsingStack()

console.log(myQueue.enqueue(3))
console.log(myQueue.enqueue(6))
console.log(myQueue.enqueue(7))
console.log(myQueue.dequeue())
console.log(myQueue.enqueue(74))
