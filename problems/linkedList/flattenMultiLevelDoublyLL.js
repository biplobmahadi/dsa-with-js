// Go top to bottom by merging
const flattenMultiLevelDoublyLL = (head) => {
  let currentNode = head

  while (currentNode) {
    if (currentNode.child) {
      let newCurrentNode = currentNode.child
      while (newCurrentNode.next) {
        newCurrentNode = newCurrentNode.next
      }
      if (currentNode.next) {
        currentNode.next.prev = newCurrentNode
      }
      newCurrentNode.next = currentNode.next
      currentNode.next = currentNode.child
      currentNode.child.prev = currentNode
      currentNode.child = null
    }

    currentNode = currentNode.next
  }

  return head
}
