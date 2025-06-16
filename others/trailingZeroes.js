function trailingZeroes(n) {
  let zeros = 0
  for (let i = 1; i <= n; i++) {
    const fives = getFives(i)
    zeros += fives
  }
  return zeros
}

function getFives(n) {
  const quotient = n / 5
  const remainder = n % 5
  if (remainder === 0) {
    if (quotient >= 5) {
      return 1 + getFives(quotient)
    }
    return 1
  }
  return 0
}

console.log(trailingZeroes(40))
