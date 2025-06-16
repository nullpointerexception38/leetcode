function maximumXOR(nums) {
  const rows = nums.length
  const cols = Math.max(...nums).toString(2).length
  const strs = nums.map(num => num.toString(2).padStart(cols, '0'))
  for (let j = 0; j < cols; j++) {
    let ones = 0
    let lastOneIndex = 0
    for (let i = 0; i < rows; i++) {
      if (strs[i][j] === '1') {
        ones++
        lastOneIndex = i
      }
    }
    if (ones > 0 && ones % 2 === 0) {
      const s = strs[lastOneIndex]
      strs[lastOneIndex] = s.slice(0, j) + '0' + s.slice(j + 1)
    }
  }
  return strs.reduce((num, str) => num ^ parseInt(str, 2), 0)
}

console.log(maximumXOR(
  [1,2,3,9,2]
))
