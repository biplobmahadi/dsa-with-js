const numOfMinutes = function (n, headID, manager, informTime) {
  if (n <= 1) return 0

  const adjacencyList = {}
  const lenOfMan = manager.length
  for (let i = 0; i < lenOfMan; i++) {
    if (manager[i] !== -1) {
      if (!adjacencyList[manager[i]]) {
        adjacencyList[manager[i]] = [i]
      } else {
        adjacencyList[manager[i]].push(i)
      }
    }
  }

  return dfs(adjacencyList, informTime, headID)
}

const dfs = (adjacencyList, informTime, headID) => {
  const connections = adjacencyList[headID]
  if (!connections) return 0

  const length = connections.length
  let comparedTime = 0
  for (let i = 0; i < length; i++) {
    const timeItNeed = dfs(adjacencyList, informTime, connections[i])
    comparedTime = Math.max(timeItNeed, comparedTime)
  }
  return comparedTime + informTime[headID]
}

const n = 8
const headID = 4
const manager = [2, 2, 4, 6, -1, 4, 4, 5]
const informTime = [0, 0, 4, 0, 7, 3, 6, 0]

console.log(numOfMinutes(n, headID, manager, informTime))
