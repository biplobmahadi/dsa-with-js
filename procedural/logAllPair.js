const arr = [1, 2, 3, 4, 5]

function logAllPair(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        continue
      }
      console.log(arr[i], arr[j])
    }
  }
}

logAllPair(arr)
