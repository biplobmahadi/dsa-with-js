const heap = [undefined, 15, 10, 12, 5, 6]

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
    }
  }
  return heap
}

const del = (heap, element) => {
  const last = heap.pop()
  heap.splice(1, 1, last)

  const len = heap.length
  let position = 1
  while (len > position) {
    const leftChild = 2 * position
    const rightChild = leftChild + 1

    if (rightChild < len) {
      if (heap[leftChild] > heap[rightChild]) {
        const tmp = heap[leftChild]
        heap[leftChild] = heap[position]
        heap[position] = tmp
        position = leftChild
      } else {
        const tmp = heap[rightChild]
        heap[rightChild] = heap[position]
        heap[position] = tmp
        position = rightChild
      }
    } else {
      position = rightChild
    }
  }

  return heap
}

// console.log(insert(heap, 20))
console.log(del(heap, 15))
