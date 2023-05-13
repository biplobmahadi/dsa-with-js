class PriorityQueue {
  // using max heap
  constructor(comparator = (a, b) => a > b) {
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
}
