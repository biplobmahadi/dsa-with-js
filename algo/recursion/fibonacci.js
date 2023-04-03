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
  // check extra
  if (n < 2) return n
  return fiboRecursion(n - 1) + fiboRecursion(n - 2)
}

console.log(fiboIteration(40)) // O(n)
console.log(fiboRecursion(40)) // O(2^n)
