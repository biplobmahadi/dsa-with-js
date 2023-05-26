const networkDelayTime = (times, n, k) => {
  const adjList = {}
  for (let i = 0; i < times.length; i++) {
    const nodeDetails = times[i]
    if (adjList[nodeDetails[0]]) {
      adjList[nodeDetails[0]].push({
        node: nodeDetails[1],
        dis: nodeDetails[2],
      })
    } else {
      adjList[nodeDetails[0]] = [{ node: nodeDetails[1], dis: nodeDetails[2] }]
    }
  }

  const distances = {}
  for (let i = 1; i <= n; i++) {
    distances[i] = Infinity
  }

  const queue = [k]
  const seen = {}
  distances[k] = 0

  while (queue.length) {
    const popped = queue.shift()
    seen[popped] = true

    const connections = adjList[popped]
    if (connections) {
      for (let i = 0; i < connections.length; i++) {
        if (!seen[connections[i].node]) {
          const newDis = distances[popped] + connections[i].dis
          if (newDis < distances[connections[i].node]) {
            distances[connections[i].node] = newDis
          }
        }
      }
    }
    let min
    for (let i = 1; i <= n; i++) {
      if (!seen[i]) {
        if (!min) {
          min = i
        } else {
          if (min > distances[i]) {
            min = i
          }
        }
      }
    }
    if (min) {
      queue.push(min)
    }
  }

  let max
  for (let i = 1; i <= n; i++) {
    if (!max) {
      max = distances[i]
    } else {
      if (max < distances[i]) {
        max = distances[i]
      }
    }
  }
  return max === Infinity ? -1 : max
}

times = [
  [2, 4, 10],
  [5, 2, 38],
  [3, 4, 33],
  [4, 2, 76],
  [3, 2, 64],
  [1, 5, 54],
  [1, 4, 98],
  [2, 3, 61],
  [2, 1, 0],
  [3, 5, 77],
  [5, 1, 34],
  [3, 1, 79],
  [5, 3, 2],
  [1, 2, 59],
  [4, 3, 46],
  [5, 4, 44],
  [2, 5, 89],
  [4, 5, 21],
  [1, 3, 86],
  [4, 1, 95],
]
console.log(networkDelayTime(times, 5, 1))
