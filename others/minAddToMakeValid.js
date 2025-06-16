function minAddToMakeValid(str) {
  const stack = []
  for (const char of str) {
    const top = stack[stack.length - 1]
    if (char === ')' && top === '(') {
      stack.pop()
    } else {
      stack.push(char)
    }
  }
  return stack.length
}
