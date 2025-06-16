function dailyTemperatures(temperatures) {
  const n = temperatures.length
  const stack = []
  const answer = Array.from({ length: n })
  for (let i = n - 1; i >= 0; i--) {
    const temperature = temperatures[i]
    let count = 1
    while (stack.length > 0 && temperature >= stack[stack.length - 1][0]) {
      count += stack.pop()[1]
    }
    if (stack.length === 0) {
      stack.push([temperature, 0])
      answer[i] = 0
    }
    else {
      stack.push([temperature, count])
      answer[i] = count
    }
  }
  return answer
}
