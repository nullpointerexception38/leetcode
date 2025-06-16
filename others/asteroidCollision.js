function asteroidCollision(asteroids) {
  const stack = []
  for (const asteroid of asteroids) {
    const _asteroid = Math.abs(asteroid)
    if (asteroid >= 0) {
      stack.push(asteroid)
    }
    else if (stack.length === 0) {
      stack.push(asteroid)
    }
    else {
      while (stack.length > 0 && stack[stack.length - 1] >= 0 && stack[stack.length - 1] < _asteroid) {
        stack.pop()
      }
      if (stack.length > 0 && stack[stack.length - 1] === _asteroid) {
        stack.pop()
      }
      else if (stack.length === 0 || stack[stack.length - 1] < _asteroid) {
        stack.push(asteroid)
      }
    }
  }
  return stack
}

console.log(asteroidCollision(
  [-2,1,1,-1]
))
