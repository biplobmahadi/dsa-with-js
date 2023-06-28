const getBoxId = (row, col) => {
  const rowVal = Math.floor(row / 3) * 3
  const colVal = Math.floor(col / 3)
  return rowVal + colVal
}

const solveSudoku = (board) => {
  const len = board.length
  const boxs = new Array(len)
  const rows = new Array(len)
  const cols = new Array(len)

  for (let i = 0; i < len; i++) {
    boxs[i] = {}
    rows[i] = {}
    cols[i] = {}
  }

  for (let r = 0; r < len; r++) {
    for (let c = 0; c < len; c++) {
      const val = board[r][c]
      if (val !== '.') {
        const boxId = getBoxId(r, c)
        boxs[boxId][val] = true
        rows[r][val] = true
        cols[c][val] = true
      }
    }
  }

  recursiveBackTracking(board, boxs, rows, cols, 0, 0)
  return board
}

const isValid = (val, row, col, boxs, rows, cols) => {
  const boxId = getBoxId(row, col)
  if (boxs[boxId][val] || rows[row][val] || cols[col][val]) {
    return false
  }
  boxs[boxId][val] = true
  rows[row][val] = true
  cols[col][val] = true
  return true
}

const removeValid = (val, row, col, boxs, rows, cols) => {
  const boxId = getBoxId(row, col)
  delete boxs[boxId][val]
  delete rows[row][val]
  delete cols[col][val]
}

const recursiveBackTracking = (board, boxs, rows, cols, row, col) => {
  if (row === 9) return true
  else {
    if (board[row][col] === '.') {
      for (let num = 1; num <= 9; num++) {
        const numVal = num.toString()
        board[row][col] = numVal

        if (isValid(numVal, row, col, boxs, rows, cols)) {
          if (col === 8) {
            if (recursiveBackTracking(board, boxs, rows, cols, row + 1, 0))
              return true
          } else {
            if (recursiveBackTracking(board, boxs, rows, cols, row, col + 1))
              return true
          }
          removeValid(numVal, row, col, boxs, rows, cols)
        }
        board[row][col] = '.'
      }
    } else {
      if (col === 8) {
        if (recursiveBackTracking(board, boxs, rows, cols, row + 1, 0))
          return true
      } else {
        if (recursiveBackTracking(board, boxs, rows, cols, row, col + 1))
          return true
      }
    }
  }
}

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]
console.log(solveSudoku(board))
