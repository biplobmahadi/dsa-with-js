let i = 0
let j = 0

const fiboIteration = (n) => {
  // check extra
  let res
  let a = 0
  let b = 1
  if (n === 0) res = a
  if (n === 1) res = b
  for (let i = 2; i <= n; i++) {
    res = a + b
    a = b
    b = res
  }
  return res
}

const fiboRecursion = (n) => {
  i++
  // check extra
  if (n < 2) return n
  return fiboRecursion(n - 1) + fiboRecursion(n - 2)
}

const memoFib = () => {
  const cache = {}
  return function fib(n) {
    j++
    if (!cache[n]) {
      if (n < 2) return n
      cache[n] = fib(n - 1) + fib(n - 2)
    }

    return cache[n]
  }
}

const fib = memoFib()

const fiboDPBottomUp = (n) => {
  const arr = [0, 1]

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2])
  }
  return arr.pop()
}

console.log(fiboIteration(40)) // O(n)
console.log(fib(40)) // O(n) & O(n)
console.log(fiboDPBottomUp(40)) // O(n)
console.log(fiboRecursion(40)) // O(2^n)
console.log('rec', i, 'dp', j)
