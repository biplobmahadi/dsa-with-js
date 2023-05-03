// everything will be stack method

class Queue {
  constructor() {
    this.stack1 = []
    this.stack2 = []
  }

  push(x) {
    this.stack1.push(x)
  }

  pop() {
    // it will be stack2.empty()
    if (this.stack2.length === 0) {
      // it will be !stack1.empty()
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop())
      }
    }
    return this.stack2.pop()
  }

  peek() {
    // it will be !stack2.empty()
    if (this.stack2.length === 0) {
      // it will be !stack1.empty()
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop())
      }
    }
    return this.stack2[this.stack2.length - 1] // this will be stack2.peek()
  }

  empty() {
    // it will be stack1.empty() && stack2.empty() -> true
    return this.stack1.length === 0 && this.stack2.length === 0
  }
}

const queue = new Queue()

queue.push(1)
queue.push(2)
queue.push(3)
queue.push(4)
console.log(queue.pop())
queue.push(5)
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())
queue.push(6)
console.log(queue.peek())
console.log(queue.peek())
console.log(queue.pop())
console.log(queue.pop())
