const isValidPalindrome = (str, left, rigth) => {
  while (rigth > left) {
    if (str[left] !== str[rigth]) return false
    left++
    rigth--
  }

  return true
}

const almostPalindrome = (str) => {
  let left = 0
  let rigth = str.length - 1

  while (rigth > left) {
    if (str[left] !== str[rigth]) {
      return (
        isValidPalindrome(str, left + 1, rigth) ||
        isValidPalindrome(str, left, rigth--)
      )
    }
    left++
    rigth--
  }

  return true
}

console.log(almostPalindrome('abc'))
