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
