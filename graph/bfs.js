const bfsInGraphForAdjacencyList = (graph) => {
  if (!graph.length) return []
  const queue = [0]
  const list = []
  const seen = {}

  while (queue.length) {
    const popped = queue.shift()
    list.push(popped)
    seen[popped] = true

    const connections = graph[popped]
    for (let i = 0; i < connections.length; i++) {
      if (!seen[connections[i]]) queue.push(connections[i])
    }
  }
  return list
}

const graph = [[1, 3], [0], [3, 8], [0, 2, 4, 5], [3, 6], [3], [4, 7], [6], [2]]

console.log(bfsInGraphForAdjacencyList(graph))

const bfsInGraphForAdjacencyMatrix = (graph) => {
  if (!graph.length) return []

  const queue = [0]
  const list = []
  const seen = {}

  while (queue.length) {
    const popped = queue.shift()
    list.push(popped)
    seen[popped] = true

    const connections = graph[popped]
    for (let i = 0; i < connections.length; i++) {
      if (connections[i] && !seen[i]) {
        queue.push(i)
      }
    }
  }

  return list
}

const graphInMatrix = [
  [0, 1, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0],
]
console.log(bfsInGraphForAdjacencyMatrix(graphInMatrix))
