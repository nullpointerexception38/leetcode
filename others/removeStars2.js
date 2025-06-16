function removeStars(str) {
  const stack = []
  for (const char of str) {
    if (char === '*') {
      stack.pop()
    }
    else {
      stack.push(char)
    }
  }
  return stack.join('')
}
