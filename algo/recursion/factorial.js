const factorialIterative = (num) => {
  let res = 1
  for (let i = num; i > 0; i--) {
    res *= i
  }
  return res
}

const factorialRecursive = (num) => {
  if (num === 1) return 1
  return num * factorialRecursive(num - 1)
}

console.log(factorialIterative(8))
console.log(factorialRecursive(8))
