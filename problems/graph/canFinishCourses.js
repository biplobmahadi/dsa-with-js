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
      const seen = {}

      while (queue.length) {
        const popped = queue.shift()
        seen[popped] = true

        const connections = adjList[popped]
        if (connections) {
          for (let j = 0; j < connections.length; j++) {
            if (connections[j] === i) return false
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

console.log(canFinish(6, preReqs))

const canFinishUsingTopologicalSort = (n, pre) => {
  const indegrees = new Array(n).fill(0)
  const adjList = indegrees.map(() => [])

  const lengthOfPre = pre.length
  for (let i = 0; i < lengthOfPre; i++) {
    const pair = pre[i]
    indegrees[pair[0]]++
    adjList[pair[1]].push(pair[0])
  }

  const stack = []
  for (let i = 0; i < n; i++) {
    if (indegrees[i] === 0) stack.push(i)
  }

  let count = 0
  while (stack.length) {
    const popped = stack.pop()
    count++

    const connections = adjList[popped]
    const len = connections.length
    for (let j = 0; j < len; j++) {
      indegrees[connections[j]]--
      if (indegrees[connections[j]] === 0) {
        stack.push(connections[j])
      }
    }
  }
  return count === n
}

console.log(canFinishUsingTopologicalSort(6, preReqs))

const canFinishOptimal = (n, pre) => {
  const indegrees = new Array(n).fill(0)
  const lengthOfPre = pre.length
  for (let i = 0; i < lengthOfPre; i++) {
    const pair = pre[i]
    indegrees[pair[0]]++
  }

  const stack = []
  for (let i = 0; i < n; i++) {
    if (indegrees[i] === 0) stack.push(i)
  }

  let count = 0
  while (stack.length) {
    const popped = stack.pop()
    count++

    for (let i = 0; i < lengthOfPre; i++) {
      const pair = pre[i]
      if (pair[1] === popped) {
        indegrees[pair[0]]--
        if (indegrees[pair[0]] === 0) {
          stack.push(pair[0])
        }
      }
    }
  }

  return count === n
}

console.log(canFinishOptimal(4, pre))
