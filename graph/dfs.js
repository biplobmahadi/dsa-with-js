const graph = [[1, 3], [0], [3, 8], [0, 2, 4, 5], [3, 6], [3], [4, 7], [6], [2]]
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

const dfsInGraphUsingAdjacencyList = (graph, vertex, list, seen) => {
  if (seen[vertex]) return

  list.push(vertex)
  seen[vertex] = true

  const connections = graph[vertex]
  for (let i = 0; i < connections.length; i++) {
    dfsInGraphUsingAdjacencyList(graph, connections[i], list, seen)
  }

  return list
}

console.log(dfsInGraphUsingAdjacencyList(graph, 0, [], {}))

const dfsInGraphUsingAdjacencyMatrix = (graph, vertex, list, seen) => {
  if (seen[vertex]) return

  list.push(vertex)
  seen[vertex] = true

  const connections = graph[vertex]
  for (let i = 0; i < connections.length; i++) {
    if (connections[i]) {
      dfsInGraphUsingAdjacencyMatrix(graph, i, list, seen)
    }
  }

  return list
}

console.log(dfsInGraphUsingAdjacencyMatrix(graphInMatrix, 0, [], {}))
