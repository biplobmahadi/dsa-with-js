class Node {
  constructor() {
    this.end = false
    this.keys = {}
  }
}

class Trie {
  constructor() {
    this.root = new Node()
  }

  insert(word) {
    const len = word.length
    let node = this.root
    for (let i = 0; i < len; i++) {
      const keys = node.keys
      if (!keys[word[i]]) {
        const newNode = new Node()
        keys[word[i]] = newNode
      }
      node = keys[word[i]]
    }
    node.end = true
  }

  search(word) {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      if (!node.keys[word[i]]) return false
      node = node.keys[word[i]]
    }
    if (!node.end) return false
    return true
  }

  startsWith(prefix) {
    let node = this.root
    for (let i = 0; i < prefix.length; i++) {
      if (!node.keys[prefix[i]]) return false
      node = node.keys[prefix[i]]
    }
    return true
  }
}

const trie = new Trie()
trie.insert('apple')
console.log(trie.search('dog'))
trie.insert('dog')
console.log(trie.search('dog'))
console.log(trie.search('app'))
console.log(trie.startsWith('app'))
trie.insert('app')
console.log(trie.search('app'))
