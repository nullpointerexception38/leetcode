function sumOfTheDigitsOfHarshadNumber(x) {
  const sum = String(x).split('').map(Number).reduce((s, num) => s + num, 0)
  const remainder = x % sum
  return remainder === 0 ? sum : -1
}
