class MyPriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = []
    this._comparator = comparator
  }

  size() {
    return this._heap.length
  }

  peek() {
    return this._heap[0]
  }

  isEmpty() {
    return this._heap.length === 0
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
    ;[this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]]
  }

  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j])
  }

  push(value) {
    this._heap.push(value)
    this._siftUp()

    return this.size()
  }

  _siftUp() {
    let nodeIdx = this.size() - 1

    while (0 < nodeIdx && this._compare(nodeIdx, this._parent(nodeIdx))) {
      this._swap(nodeIdx, this._parent(nodeIdx))
      nodeIdx = this._parent(nodeIdx)
    }
  }

  pop() {
    if (this.size() > 1) {
      this._swap(0, this.size() - 1)
    }

    const poppedValue = this._heap.pop()
    this._siftDown()
    return poppedValue
  }

  _siftDown() {
    let nodeIdx = 0

    while (
      (this._leftChild(nodeIdx) < this.size() &&
        this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
      (this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), nodeIdx))
    ) {
      const greaterChildIdx =
        this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
          ? this._rightChild(nodeIdx)
          : this._leftChild(nodeIdx)

      this._swap(greaterChildIdx, nodeIdx)
      nodeIdx = greaterChildIdx
    }
  }
}

const networkDelayTime = function (times, n, k) {
  const distances = new Array(n).fill(Infinity)
  const adjList = distances.map(() => [])

  for (let i = 0; i < times.length; i++) {
    const source = times[i][0]
    const destination = times[i][1]
    const weight = times[i][2]
    adjList[source - 1].push({ node: destination - 1, weight })
  }

  distances[k - 1] = 0
  const queue = new MyPriorityQueue((a, b) => distances[a] < distances[b])
  queue.push(k - 1)

  while (!queue.isEmpty()) {
    const popped = queue.pop()
    const connections = adjList[popped]

    for (let i = 0; i < connections.length; i++) {
      if (
        distances[popped] + connections[i].weight <
        distances[connections[i].node]
      ) {
        distances[connections[i].node] =
          distances[popped] + connections[i].weight
        queue.push(connections[i].node)
      }
    }
  }

  const max = Math.max(...distances)

  return max === Infinity ? -1 : max
}

// bellman ford algo
const networkDelayTime2 = (times, n, k) => {
  const distances = new Array(n).fill(Infinity)
  distances[k - 1] = 0

  for (let i = 0; i < n - 1; i++) {
    let count = 0
    for (let j = 0; j < times.length; j++) {
      const source = times[j][0]
      const destination = times[j][1]
      const weight = times[j][2]

      if (distances[source - 1] + weight < distances[destination - 1]) {
        distances[destination - 1] = distances[source - 1] + weight
        count++
      }
    }
    if (count === 0) break
  }

  const max = Math.max(...distances)

  return max === Infinity ? -1 : max
}

const times = [
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
