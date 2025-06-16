function maxArea(heights) {
  let i = 0
  let j = heights.length - 1
  let maxArea = 0
  while (i < j) {
    const area = (j - i) * Math.min(heights[i], heights[j])
    maxArea = Math.max(maxArea, area)
    if (heights[i] < heights[j]) {
      i++
    }
    else {
      j--
    }
  }
  return maxArea
}
