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

const cycleStartNode = (head) => {
  const set = new Set()
  let currentNode = head

  while (currentNode) {
    if (set.has(currentNode)) return currentNode
    set.add(currentNode)
    currentNode = currentNode.next
  }

  return null
}

const cycleStartNodeOptimal = (head) => {
  if (head === null) return null

  let tortoise = head
  let hare = head
  let count = 0

  while ((!(tortoise === hare) && hare) || count < 1) {
    count++
    tortoise = tortoise.next

    if (hare.next) hare = hare.next.next
    else hare = null
  }

  if (hare) {
    let startNode = head
    while (!(startNode === hare)) {
      hare = hare.next
      startNode = startNode.next
    }
    return startNode
  }

  return null
}
