class MyGraph {
  constructor() {
    this.noOfNode = 0
    this.adjacencyList = {}
  }

  addVertex(node) {
    this.adjacencyList[node] = []
    this.noOfNode++
    return this
  }

  addEdge(node1, node2) {
    this.adjacencyList[node1].push(node2)
    this.adjacencyList[node2].push(node1)
    return this
  }
}

const myGraph = new MyGraph()

myGraph.addVertex('0')
myGraph.addVertex('1')
myGraph.addVertex('2')
myGraph.addVertex('3')
myGraph.addVertex('4')
myGraph.addVertex('5')
myGraph.addVertex('6')

myGraph.addEdge('0', '2')
myGraph.addEdge('1', '2')
myGraph.addEdge('0', '1')
myGraph.addEdge('6', '5')
myGraph.addEdge('5', '4')
myGraph.addEdge('1', '3')
myGraph.addEdge('3', '4')
myGraph.addEdge('4', '2')

console.log(myGraph)
