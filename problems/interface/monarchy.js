class Person {
  constructor(name) {
    this.name = name
    this.isAlive = true
    this.childrens = []
  }
}

class Monarchy {
  constructor(king) {
    this.king = new Person(king)
    this._persons = { [this.king.name]: this.king }
  }

  birth(childName, parentName) {
    const parent = this._persons[parentName]
    const child = new Person(childName)
    parent.childrens.push(child)
    this._persons[childName] = child
  }

  death(name) {
    const person = this._persons[name]
    if (person) {
      person.isAlive = false
    }
  }

  getOrderOfSuccession() {
    const list = []
    this._dfs(this.king, list)
    return list
  }

  _dfs(currentPerson, list) {
    if (currentPerson.isAlive) {
      list.push(currentPerson.name)
    }
    currentPerson.childrens.forEach((child) => {
      if (child) {
        this._dfs(child, list)
      }
    })
  }
}

const monarchy = new Monarchy('Jake')
monarchy.birth('Catherin', 'Jake')
monarchy.birth('Tom', 'Jake')
monarchy.birth('Celine', 'Jake')
monarchy.birth('Jane', 'Catherin')
monarchy.birth('Mark', 'Catherin')
monarchy.birth('Peter', 'Celine')
monarchy.birth('Farah', 'Jane')
console.log(monarchy.getOrderOfSuccession())
monarchy.death('Jake')
monarchy.death('Jane')
console.log(monarchy.getOrderOfSuccession())
