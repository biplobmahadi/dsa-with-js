class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value)
    this.tail = this.head
    this.len = 1
  }

  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.len++
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.len++
    this.head = newNode
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

  insert(index, value) {
    if (index === 0) {
      this.prepend(value)
    } else {
      let i = 1
      let currentNode = this.head
      while (currentNode !== null) {
        if (i === index) {
          const newNode = new Node(value)
          newNode.next = currentNode.next
          currentNode.next = newNode
          break
        }
        currentNode = currentNode.next
        i++
      }
    }
  }

  remove(index) {
    // we should check many things, but now avoid
    if (index === 0) {
      this.head = this.head.next
      this.len--
    } else {
      let i = 1
      let leaderNode = this.head
      while (i !== index) {
        leaderNode = leaderNode.next
        i++
      }
      leaderNode.next = leaderNode.next.next
      this.len--
    }
  }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(6)
myLinkedList.prepend(60)
myLinkedList.insert(2, 500)
myLinkedList.remove(2)
console.log(myLinkedList.printList())
