const heap = [undefined, 15, 10, 12, 5, 6]
const heap2 = [undefined, 40, 30, 10, 20, 15]

const insert = (heap, element) => {
  heap.push(element)

  let position = heap.length - 1

  while (position > 1) {
    const parent = Math.floor(position / 2)
    if (heap[parent] < heap[position]) {
      const tmp = heap[parent]
      heap[parent] = heap[position]
      heap[position] = tmp
      position = parent
    } else {
      return
    }
  }
  return heap
}

const del = (heap) => {
  const last = heap.pop()
  heap.splice(1, 1, last)

  let position = 1
  const len = heap.length

  while (len > position) {
    const leftChild = 2 * position
    const rightChild = leftChild + 1

    if (heap[leftChild] || heap[rightChild]) {
      let compared = leftChild
      if (heap[rightChild]) {
        compared = heap[leftChild] > heap[rightChild] ? leftChild : rightChild
      }

      if (heap[compared] > heap[position]) {
        const tmp = heap[compared]
        heap[compared] = heap[position]
        heap[position] = tmp
        position = compared
      }
    } else {
      position = rightChild
    }
  }

  return heap
}

// console.log(insert(heap, 20))
console.log(del(heap2))
