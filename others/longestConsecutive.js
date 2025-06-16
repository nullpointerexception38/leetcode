function longestConsecutive(nums) {
  if (nums.length === 0) {
    return 0
  }
  const stack = []
  for (const num of nums) {
    const top = stack[stack.length - 1]
    if (num === top) {
      continue
    }
    if (stack.length === 0 || num > top) {
      stack.push(num)
    }
    else {
      let index = 0
      while (index < stack.length) {
        if (num === stack[index]) {
          break
        }
        if (num < stack[index]) {
          stack.splice(index, 0, num)
          break
        }
        index++
      }
    }
  }
  let max = 0
  let count = 0
  for (let i = 1; i < stack.length; i++) {
    if (stack[i - 1] + 1 === stack[i]) {
      count++
    }
    else {
      count = 0
    }
    max = count > max ? count : max
  }
  return max + 1
}
