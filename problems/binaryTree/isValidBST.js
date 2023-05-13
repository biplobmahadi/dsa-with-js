const inOrderDFS = (root, list) => {
  if (!root) return
  if (root.left) inOrderDFS(root.left, list)
  list.push(root.val)
  if (root.right) inOrderDFS(root.right, list)
}

const isValidBST = (root) => {
  const list = []
  inOrderDFS(root, list)

  let i = 0
  let j = 1
  while (list.length > j) {
    if (list[i] >= list[j]) return false
    i++
    j++
  }

  return true
}

const root = {
  val: 15,
  left: {
    val: 10,
    left: null,
    right: {
      val: 16,
      left: null,
      right: null,
    },
  },
  right: {
    val: 25,
    left: null,
    right: null,
  },
}

console.log(isValidBST(root))
