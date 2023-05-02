const validStrWithParentheses = (s) => {
  const firstStr = []
  const finalStr = []
  const stack = []
  const len = s.length

  for (let i = 0; i < len; i++) {
    if (s[i] === '(') {
      stack.push(s[i])
      firstStr.push(s[i])
    } else if (s[i] === ')') {
      const poppedItem = stack.pop()
      if (poppedItem) {
        firstStr.push(s[i])
      }
    } else {
      firstStr.push(s[i])
    }
  }

  if (stack.length) {
    const len = firstStr.length - 1
    for (let i = len; i >= 0; i--) {
      const peakedItem = stack[stack.length - 1]
      if (peakedItem !== firstStr[i]) {
        finalStr.push(firstStr[i])
      } else {
        stack.pop()
      }
    }
    return finalStr.reverse().join('')
  }

  return firstStr.join('')
}

const validStrWithParenthesesOptimal = (s) => {
  const arr = s.split('')
  const stack = []
  const len = arr.length

  for (let i = 0; i < len; i++) {
    if (arr[i] === '(') {
      stack.push(i)
    } else if (arr[i] === ')' && stack.length) {
      stack.pop()
    } else if (arr[i] === ')') {
      arr[i] = ''
    }
  }

  while (stack.length) {
    const poppedIndex = stack.pop()
    arr[poppedIndex] = ''
  }

  return arr.join('')
}

console.log(validStrWithParentheses('))(('))
console.log(validStrWithParenthesesOptimal('))(('))
