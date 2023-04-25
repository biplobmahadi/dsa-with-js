const backspaceCompare = (S, T) => {
  const first = []
  const second = []

  for (let i = 0; i < S.length; i++) {
    if (S[i] === '#') {
      first.pop()
    } else {
      first.push(S[i])
    }
  }
  for (let i = 0; i < T.length; i++) {
    if (T[i] === '#') {
      second.pop()
    } else {
      second.push(T[i])
    }
  }

  if (first.length !== second.length) {
    return false
  } else {
    const len = first.length
    for (let i = 0; i < len; i++) {
      if (first[i] !== second[i]) return false
    }
    return true
  }
}

const backspaceCompareOptimal = (s, t) => {
  let p1 = s.length - 1
  let p2 = t.length - 1
  let shiftP1 = 0,
    shiftP2 = 0

  while (p1 >= 0 || p2 >= 0) {
    if (s[p1] !== '#' && t[p2] !== '#') {
      if (shiftP1 === 0 && shiftP2 === 0) {
        if (s[p1] !== t[p2]) return false
        p1--
        p2--
      } else {
        if (shiftP1) {
          p1--, shiftP1--
        }
        if (shiftP2) {
          p2--, shiftP2--
        }
      }
    } else {
      if (s[p1] === '#') {
        p1--
        shiftP1++
      }
      if (t[p2] === '#') {
        p2--
        shiftP2++
      }
    }
  }

  return true
}

console.log(backspaceCompare('bxj##tw', 'bxj###tw')) // O(a+b) & O(a+b)
console.log(backspaceCompareOptimal('bxj##tw', 'bxj###tw')) // O(a+b) && O(1)
