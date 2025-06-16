function dailyTemperatures(temperatures) {
  const answer = []
  const stack = []
  for (let i = temperatures.length - 1; i >= 0; i--) {
    const temp = temperatures[i]
    console.log(`${i}: ${stack}`)
    while (stack.length > 0 && temp >= stack[stack.length - 1][0]) {
      stack.pop()
    }
    stack.push([temp, i])
    if (stack.length >= 2) {
      const prev = stack[stack.length - 2]
      answer[i] = prev[1] - i
    } else {
      answer[i] = 0
    }
  }
  return answer
}

console.log(dailyTemperatures(
  [89,62,70,58,47,47,46,76,100,70]
))
