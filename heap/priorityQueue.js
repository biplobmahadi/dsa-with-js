const arr = [2, 32, 23, 35, 65, 76, 45]

class MyMinHeap {
  constructor() {
    this.data = [undefined]
  }

  insert(value) {
    this.data.push(value)
    let position = this.data.length - 1

    while (position > 1) {
      const parent = Math.floor(position / 2)
      if (this.data[parent] > this.data[position]) {
        const tmp = this.data[parent]
        this.data[parent] = this.data[position]
        this.data[position] = tmp
        position = parent
      } else {
        return
      }
    }
  }

  delete() {
    if (this.data.length > 2) {
      this.data.splice(1, 1, this.data.pop())
    } else {
      this.data.splice(1, 1)
    }

    let parent = 1
    while (parent < this.data.length) {
      const leftChild = 2 * parent
      const rightChild = leftChild + 1
      if (this.data[leftChild] || this.data[rightChild]) {
        let minPosition = leftChild
        if (this.data[rightChild]) {
          minPosition =
            this.data[leftChild] > this.data[rightChild]
              ? rightChild
              : leftChild
        }
        if (this.data[minPosition] < this.data[parent]) {
          const tmp = this.data[minPosition]
          this.data[minPosition] = this.data[parent]
          this.data[parent] = tmp
        } else {
          return
        }
      } else {
        return
      }
    }
  }
}

// const h = new MyMinHeap()
// h.insert(21)
// h.delete()
// console.log(h.data)

const findKthLargest = (arr, position) => {
  const myHeap = new MyMinHeap()

  for (let i = 0; i < position; i++) {
    myHeap.insert(arr[i])
  }

  for (let i = position; i < arr.length; i++) {
    const topValue = myHeap.data[1]
    if (topValue < arr[i]) {
      myHeap.delete()
      myHeap.insert(arr[i])
    }
  }
  return myHeap.data[1]
}

console.log(findKthLargest(arr, 1))
console.log(findKthLargest(arr, 2))
console.log(findKthLargest(arr, 3))
console.log(findKthLargest(arr, 4))
console.log(findKthLargest(arr, 5))
console.log(findKthLargest(arr, 6))
console.log(findKthLargest(arr, 7))
