const str = 'A man, a plan, a canal: Panama'

const isValidPalindrome = (str) => {
  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase()

  let left = 0
  let rigth = str.length - 1

  while (rigth > left) {
    if (str[left] !== str[rigth]) return false
    left++
    rigth--
  }
  return true
}

console.log(isValidPalindrome('a'))
