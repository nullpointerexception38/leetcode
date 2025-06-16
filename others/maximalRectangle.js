function maximalRectangle(matrix) {
  const w = matrix[0].length
  const h = matrix.length
  const heights = Array.from({ length: w }).fill(0)
  let maxArea = 0
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      const value = matrix[i][j]
      heights[j] = value === '0' ? 0 : heights[j] + 1
    }
    maxArea = Math.max(maxArea, largestRectangleArea(heights))
  }
  return maxArea
}

function largestRectangleArea(heights) {
  const n = heights.length
  const stack = []
  let maxArea = 0
  for (let i = 0; i <= n; i++) {
    const h = i === n ? 0 : heights[i]
    while (stack.length > 0 && heights[stack[stack.length - 1]] >= h) {
      const height = heights[stack.pop()]
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1
      maxArea = Math.max(maxArea, width * height)
    }
    stack.push(i)
  }
  return maxArea
}
