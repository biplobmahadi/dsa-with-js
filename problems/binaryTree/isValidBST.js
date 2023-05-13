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
    right: null,
  },
  right: {
    val: 25,
    left: null,
    right: null,
  },
}

const preOrderDFS = (root, min, max) => {
  if (!(root.val < max && root.val > min)) return false

  if (root.left) if (!preOrderDFS(root.left, min, root.val)) return false
  if (root.right) if (!preOrderDFS(root.right, root.val, max)) return false

  return true
}

const isValidBSTOptimal = (root) => {
  if (!root) return true
  return preOrderDFS(root, -Infinity, Infinity)
}

console.log(isValidBSTOptimal(root))
