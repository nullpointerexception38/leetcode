function maxArea(heights) {
  let i = 0
  let j = heights.length - 1
  let area = 0
  while (i < j) {
    area = Math.max(area, (j - i) * Math.min(heights[i], heights[j]))
    if (heights[i] < heights[j]) {
      i++
    }
    else {
      j--
    }
  }
  return area
}
