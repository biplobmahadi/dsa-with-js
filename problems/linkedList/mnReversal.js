const mnReversal = (head, m, n) => {
  if (head === null) return null

  let count = 1
  let startPortionTail = null
  let reverseHead = null
  let reversePortionTail = null
  let endPortionHead = null
  let currentNode = head

  while (currentNode) {
    if (count === m - 1) startPortionTail = currentNode
    if (count === m) reversePortionTail = currentNode
    if (count === n + 1) endPortionHead = currentNode
    const nextNode = currentNode.next
    if (count >= m && count <= n) {
      currentNode.next = reverseHead
      reverseHead = currentNode
    }
    currentNode = nextNode
    count++
  }

  if (startPortionTail) startPortionTail.next = reverseHead
  if (reversePortionTail) reversePortionTail.next = endPortionHead

  if (startPortionTail) return head
  else return reverseHead
}

const head = {
  value: 1,
  next: {
    value: 2,
    next: { value: 3, next: { value: 4, next: { value: 5, next: null } } },
  },
}

const mnReversalTutorial = (head, m, n) => {
  let count = 1,
    currentNode = head,
    start = null

  while (count < m) {
    start = currentNode
    currentNode = currentNode.next
    count++
  }

  let newHead = null,
    tail = currentNode
  while (count >= m && count <= n) {
    const nextNode = currentNode.next
    currentNode.next = newHead
    newHead = currentNode
    currentNode = nextNode
    count++
  }

  if (start) start.next = newHead
  tail.next = currentNode

  if (m > 1) return head
  return newHead
}

console.log(JSON.stringify(mnReversalTutorial(head, 1, 3), null, 2))

console.log(JSON.stringify(mnReversal(head, 1, 3), null, 2))
