class MyStack {
  constructor() {
    this.data = []
  }

  push(value) {
    this.data.push(value)
    return this.data
  }

  pop() {
    const popedValue = this.data.pop()
    return popedValue
  }

  peak() {
    return this.data[this.data.length - 1]
  }
}

const myStack = new MyStack()
myStack.push(2)
myStack.push(21)
myStack.push(22)
myStack.pop()
console.log(myStack.peak())
console.log(myStack)
