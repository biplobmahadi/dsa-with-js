const lenOfLongestSubstr = (s) => {
  let longest = 0
  const len = s.length

  for (let i = 0; i < len; i++) {
    let map = new Map()
    let currentLongest = 0

    for (let j = i; !map[s[j]] && j < len; j++) {
      map[s[j]] = true
      currentLongest++
    }
    longest = Math.max(longest, currentLongest)
  }

  return longest
}

const lenOfLongestSubstrOptimal = (s) => {
  let left = 0,
    right = 0,
    largest = 0
  const map = {}
  const len = s.length

  while (right < len) {
    if (map[s[right]] === undefined) {
      map[s[right]] = right
      right++
      if (right - left > largest) largest++
    } else {
      if (map[s[right]] >= left) {
        left = map[s[right]] + 1
        map[s[right]] = right
        right++
      } else {
        map[s[right]] = right
        right++
        if (right - left > largest) largest++
      }
    }
  }
  return largest
}

console.log(lenOfLongestSubstr('abcabcbb'))
console.log(lenOfLongestSubstrOptimal('abcabcbb'))
