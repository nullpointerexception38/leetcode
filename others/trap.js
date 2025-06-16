function trap(heights) {
  let volume = 0
  let stack = []
  for (let i = 0; i < heights.length; i++) {
    //console.log({ stack: stack.map(row => row.height), volume })
    const height = heights[i]
    const size = stack.length
    const top = stack[stack.length - 1]
    const [bottom] = stack
    if (size === 0 && height === 0) {
      continue
    }
    if (size === 0 || top.height >= height) {
      stack.push({ index: i, height })
    }
    else if (top.height < height) {
      let count = 0
      const popped = []
      const waterLevel = Math.min(bottom.height, height)
      while (stack.length > 0 && height > stack[stack.length - 1].height) {
        const row = stack.pop()
        popped.push(row)
        volume += waterLevel - row.height
        count++
      }
      if (height > bottom.height) {
        stack = [{ index: i, height }]
      }
      else {
        for (const row of popped) {
          stack.push({ ...row, height: waterLevel })
        }
        stack.push({ index: i, height })
      }
    }
  }
  return volume
}

const heights = require('./heights2.js')

console.log(trap(
  heights
))
