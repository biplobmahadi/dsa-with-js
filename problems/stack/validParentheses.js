const isValidParentheses = (str) => {
  const stack = []
  const len = str.length

  for (let i = 0; i < len; i++) {
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
      stack.push(str[i])
    } else {
      const poppedItem = stack.pop()

      if (poppedItem === '(') {
        if (str[i] !== ')') return false
      } else if (poppedItem === '[') {
        if (str[i] !== ']') return false
      } else {
        if (str[i] !== '}') return false
      }
    }
  }

  if (stack.length > 0) return false
  return true
}

const map = {
  '(': ')',
  '[': ']',
  '{': '}',
}

const isValidParenthesesGood = (str) => {
  const len = str.length
  const stack = []

  for (let i = 0; i < len; i++) {
    if (map[str[i]]) {
      stack.push(str[i])
    } else {
      const poppedItem = stack.pop()
      const currectItem = map[poppedItem]

      if (currectItem !== str[i]) return false
    }
  }

  return stack.length === 0
}

console.log(isValidParentheses('{[()]}'))
console.log(isValidParenthesesGood('{[()]}'))
