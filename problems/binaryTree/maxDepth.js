const drsWithCount = (root, count) => {
  if (root === null) return count
  count++
  return Math.max(
    drsWithCount(root.left, count),
    drsWithCount(root.right, count)
  )
}

const maxDepth = (root) => {
  if (root === null) return 0
  return drsWithCount(root, 0)
}

const root = {
  value: 5,
  left: {
    value: 4,
    left: null,
    right: null,
  },
  right: {
    value: 3,
    left: { value: 2, left: null, right: null },
    right: null,
  },
}

console.log(maxDepth(root))
