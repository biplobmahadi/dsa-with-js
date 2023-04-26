const reverseLL = (head) => {
  if (head === null) return null

  let currentNode = head
  let newHead = null
  while (currentNode) {
    const nextNode = currentNode.next
    currentNode.next = newHead
    newHead = currentNode

    currentNode = nextNode
  }
  return newHead
}

const ll = { value: 1, next: { value: 2, next: { value: 3, next: null } } }
console.log(reverseLL(ll))
