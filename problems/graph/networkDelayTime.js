// create a priority queue with min heap
class PriorityQueue {
  constructor(comparator = (a, b) => a < b) {
    this._heap = []
    this._comparator = comparator
  }

  size() {
    return this._heap.length
  }

  isEmpty() {
    return this.size === 0
  }

  peak() {
    return this._heap[0]
  }

  _parent(idx) {
    return Math.floor((idx - 1) / 2)
  }

  _leftChild(idx) {
    return idx * 2 + 1
  }

  _rightChild(idx) {
    return idx * 2 + 2
  }

  _swap(i, j) {
    const tmp = this._heap[i]
    this._heap[i] = this._heap[j]
    this._heap[j] = tmp
  }

  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j])
  }

  push(val) {
    this._heap.push(val)

    let idx = this.size() - 1
    while (idx > 0 && this._compare(idx, this._parent(idx))) {
      this._swap(idx, this._parent(idx))
      idx = this._parent(idx)
    }

    return this.size()
  }

  pop() {
    if (this._heap.size() > 1) {
      this._swap(0, this.size() - 1)
    }
    const popped = this._heap.pop()

    let idx = 0
    while (
      (this._leftChild(idx) < this.size() &&
        this._compare(this._leftChild(idx), idx)) ||
      (this._rightChild(idx) < this.size() &&
        this._compare(this._rightChild(idx), idx))
    ) {
      const greaterIdx =
        this._rightChild(idx) < this.size() &&
        this._compare(this._rightChild(idx), this._leftChild(idx))
          ? this._rightChild(idx)
          : this._leftChild(idx)
      this._swap(greaterIdx, idx)
      idx = greaterIdx
    }

    return popped
  }
}

const networkDelayTime = (times, n, k) => {}

times = [
  [2, 4, 10],
  [5, 2, 38],
  [3, 4, 33],
  [4, 2, 76],
  [3, 2, 64],
  [1, 5, 54],
  [1, 4, 98],
  [2, 3, 61],
  [2, 1, 0],
  [3, 5, 77],
  [5, 1, 34],
  [3, 1, 79],
  [5, 3, 2],
  [1, 2, 59],
  [4, 3, 46],
  [5, 4, 44],
  [2, 5, 89],
  [4, 5, 21],
  [1, 3, 86],
  [4, 1, 95],
]
console.log(networkDelayTime(times, 5, 1))

const p = new PriorityQueue()
console.log(p)
