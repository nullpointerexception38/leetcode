function decodeString(str) {
  const stack = []
  const isNum = char => {
    const charCode = char.charCodeAt(0)
    return 48 <= charCode && charCode <= 57
  }
  for (const char of str) {
    if (char === ']') {
      let s = ''
      while (stack[stack.length - 1] !== '[') {
        s = stack.pop() + s
      }
      stack.pop()
      let numStr = ''
      while (stack.length > 0 && isNum(stack[stack.length - 1])) {
        numStr = stack.pop() + numStr
      }
      const num = parseInt(numStr, 10)
      stack.push(s.repeat(num))
    }
    else {
      stack.push(char)
    }
  }
  return stack.join('')
}
