function trap(heights) {
  const stack = []
  let volume = 0
  for (let i = 0; i < heights.length; i++) {
    const currentHeight = heights[i]
    while (stack.length > 0 && currentHeight >= heights[stack[stack.length - 1]]) {
      const height = Math.min(heights[stack[0]], currentHeight)
      const last = stack.pop()
      volume += (last - (stack[stack.length - 1] ?? 0)) * (height - heights[last])
    }
    if (stack.length === 0 || currentHeight < heights[stack[stack.length - 1]]) {
      stack.push(i)
    }
  }
  return volume
}
