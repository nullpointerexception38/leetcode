console.log(triangleType([3, 4, 5]))

function triangleType(nums) {
  const [a, b, c] = nums
  const valid = (a + b) > c && (a + c) > b && (b + c) > a
  if (!valid) {
    return 'none'
  }
  const equalSides = [a === b, b === c, c === a].filter(value => value).length
  if (equalSides === 3) {
    return 'equilateral'
  }
  if (equalSides === 1) {
    return 'isosceles'
  }
  return 'scalene'
}
