class MyHashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * (i + 1)) % this.data.length
    }
    return hash
  }

  set(key, value) {
    const address = this._hash(key)
    if (!this.data[address]) {
      this.data[address] = []
    }
    this.data[address].push([key, value])
  }

  get(key) {
    const address = this._hash(key)
    const currentBucket = this.data[address]
    if (currentBucket.length) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }
  }
}

const myHash = new MyHashTable(20)

myHash.set('grape', 223)
myHash.set('grapee', 2203)
myHash.set('grapeee', 22003)
myHash.set('grapeeee', 223000)
console.log(myHash.get('grapeeee'))
