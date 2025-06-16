function getMaximumXor(nums, maximumBit) {
  const res = []
  const maxK = Math.pow(2, maximumBit) - 1
  let current = 0
  for (const num of nums) {
    current ^= num
    const str = current.toString(2).padStart(maximumBit, '0').slice(-maximumBit)
    const reversedStr = str.split('').map(c => c === '0' ? '1' : '0').join('')
    res.unshift(parseInt(reversedStr, 2))
  }
  return res
}

console.log(getMaximumXor([2, 3, 4, 7], 3))
