function findDifferentBinaryString(nums) {
  const size = nums.length
  const power = Math.max.apply(null, nums.map(num => num.length))
  const max = Math.pow(2, power)
  const used = nums.reduce((m, num) => {
    m.set(parseInt(num, 2), true)
    return m
  }, new Map())
  let count = 0
  let notUsed = []
  for (let i = 0; i < max; i++) {
    if (used.get(i)) {
      count++
    }
    else if (count === size) {
      return i.toString(2).padStart(power, '0')
    } else {
      notUsed.push(i)
    }
  }
  const [firstNotUsed] = notUsed
  if (typeof firstNotUsed !== 'undefined') {
    return firstNotUsed.toString(2).padStart(power, '0')
  }
  return null
}

console.log(findDifferentBinaryString(
  ["111","011","001"]
))
