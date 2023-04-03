const reverseStr = (str) => {
  if (str === '') return ''
  return reverseStr(str.substring(1)) + str.charAt(0)
}

console.log(reverseStr('hi there'))
