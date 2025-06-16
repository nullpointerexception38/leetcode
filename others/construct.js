function construct(grid) {
  return constructQuadTree(grid, 0, 0, grid.length)
}

function constructQuadTree(grid, rowStart, colStart, length) {
  if (length === 1) {
    return createLeaf(grid[rowStart][colStart])
  }
  const halfLength = length / 2
  const nodes = [
    constructQuadTree(grid, rowStart, colStart, halfLength),
    constructQuadTree(grid, rowStart, colStart + halfLength, halfLength),
    constructQuadTree(grid, rowStart + halfLength, colStart, halfLength),
    constructQuadTree(grid, rowStart + halfLength, colStart + halfLength, halfLength)
  ];
  const [firstNode] = nodes
  const firstValue = firstNode.val
  const mergeable = nodes.every(node => node.val === firstValue && node.isLeaf)
  if (mergeable) {
    return firstNode
  }
  return createNode(...nodes)
}

function createLeaf(value) {
  return new _Node(value === 1, true)
}

function createNode(topLeft, topRight, bottomLeft, bottomRight) {
  return new _Node(true, false, topLeft, topRight, bottomLeft, bottomRight)
}
