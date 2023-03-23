class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
      return
    }
    let currentNode = this.root
    while (true) {
      if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode
          return this
        }
        currentNode = currentNode.right
      } else {
        if (!currentNode.left) {
          currentNode.left = newNode
          return this
        }
        currentNode = currentNode.left
      }
    }
  }

  lookup(value) {
    // check necessary things
    let currentNode = this.root
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode
      }
      if (currentNode.value < value) {
        currentNode = currentNode.right
      } else {
        currentNode = currentNode.left
      }
    }
  }

  remove(value) {
    // check necessary things
  }
}

const bst = new BST()
bst.insert(9)
bst.insert(4)
bst.insert(6)
bst.insert(20)
bst.insert(170)
bst.insert(15)
bst.insert(1)
