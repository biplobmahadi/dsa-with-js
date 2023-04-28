const isCycleInLL = (head) => {
  const set = new Set()
  let currentNode = head

  while (currentNode) {
    if (set.has(currentNode)) return true
    set.add(currentNode)
    currentNode = currentNode.next
  }

  return false
}