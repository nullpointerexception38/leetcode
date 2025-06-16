function minSwaps(s) {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    const top = stack[stack.length - 1]
    if (top === '[' && c === ']') {
      stack.pop()
    } else {
      stack.push(c)
    }
  }
  const stackSize = stack.length
  const remainder = stackSize % 4
  const res = Math.floor(stackSize / 4)
  if (remainder > 0) {
    return res + 1
  }
  return res
}
