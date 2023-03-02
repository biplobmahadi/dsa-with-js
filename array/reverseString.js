const reverseString = (str) => {
  const len = str.length
  let revArr = []

  for (let i = len - 1; i >= 0; i--) {
    revArr.push(str[i])
  }

  return revArr.join('')
}

reverseString('hi there, I am biplob')
