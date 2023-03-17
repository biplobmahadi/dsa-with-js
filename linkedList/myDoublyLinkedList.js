class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = this.head
    this.len = 1
  }

  printList() {
    const arr = []
    let currentNode = this.head
    while (currentNode !== null) {
      arr.push(currentNode.value)
      currentNode = currentNode.next
    }
    return arr
  }

  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    newNode.prev = this.tail
    this.tail = newNode
    this.len++
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode
    this.len++
  }

  getLeader(index) {
    let leader = this.head
    for (let i = 0; i < index - 1; i++) {
      leader = leader.next
    }
    return leader
  }

  insert(index, value) {
    // check if needed
    const leaderNode = this.getLeader(index)
    const followerNode = leaderNode.next
    const newNode = new Node(value)
    leaderNode.next = newNode
    newNode.next = followerNode
    newNode.prev = leaderNode
    this.len++
  }

  remove(index) {
    // check needed thing
    const leaderNode = this.getLeader(index)
    const currentNode = leaderNode.next
    const followerNode = currentNode.next
    leaderNode.next = followerNode
    followerNode.prev = leaderNode
    this.len--
  }
}

const myDoublyLinkedList = new DoublyLinkedList(4)
myDoublyLinkedList.append(3)
// myDoublyLinkedList.append(5)
myDoublyLinkedList.prepend(6)
myDoublyLinkedList.insert(1, 12)
myDoublyLinkedList.remove(2)

console.log(myDoublyLinkedList.printList())
console.log(myDoublyLinkedList.head.next)
