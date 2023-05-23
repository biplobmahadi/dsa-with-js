const canFinish = (n, gra) => {
  const adjList = {}

  for (let i = 0; i < gra.length; i++) {
    if (adjList[gra[i][1]]) {
      adjList[gra[i][1]].push(gra[i][0])
    } else {
      adjList[gra[i][1]] = [gra[i][0]]
    }
  }

  for (let i = 0; i < n; i++) {
    const listEl = adjList[i]

    if (listEl) {
      const queue = [i]
      const currentVer = i
      const seen = {}

      while (queue.length) {
        const popped = queue.shift()
        seen[popped] = true

        const connections = adjList[popped]
        if (connections) {
          for (let j = 0; j < connections.length; j++) {
            if (connections[j] === currentVer) return false
            if (!seen[connections[j]]) {
              queue.push(connections[j])
            }
          }
        }
      }
    }
  }

  return true
}

const preReqs = [
  [1, 0],
  [2, 1],
  [2, 5],
  [0, 3],
  [4, 3],
  [5, 3],
  [5, 4],
]
const pre = [
  [2, 0],
  [1, 0],
  [3, 1],
  [3, 2],
  [1, 3],
]

console.log(canFinish(4, pre))
