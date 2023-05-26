// bellman ford algo
const networkDelayTime = (times, n, k) => {
  const distances = new Array(n).fill(Infinity)
  distances[k - 1] = 0

  for (let i = 0; i < n - 1; i++) {
    let count = 0
    for (let j = 0; j < times.length; j++) {
      const source = times[j][0]
      const destination = times[j][1]
      const weight = times[j][2]

      if (distances[source - 1] + weight < distances[destination - 1]) {
        distances[destination - 1] = distances[source - 1] + weight
        count++
      }
    }
    if (count === 0) break
  }

  const max = Math.max(...distances)

  return max === Infinity ? -1 : max
}

const times = [
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
