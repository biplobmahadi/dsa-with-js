class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }

  // O(1)
  push(item) {
    this.data[this.length] = item
    this.length++
    return this.length
  }

  // O(1)
  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }

  // O(n)
  delete(index) {
    const deletedItem = this.data[index]
    this.shiftLeft(index)
    return deletedItem
  }

  shiftLeft(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
  }
}

const arr = new MyArray()
arr.push('hi')
arr.push('there')
arr.push('everyone')
arr.pop()
arr.push(',')
arr.push('.')
arr.push('I am ok!')
arr.delete(3)
console.log(arr)
