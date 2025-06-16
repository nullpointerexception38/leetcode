function countDistinctIntegers(nums) {
  const map = nums.reduce((obj, num) => {
    obj[num] = true
    const reversed = String(num).split('').reverse().join('').replace(/^0+/, '')
    obj[reversed] = true
    return obj
  }, {})
  return Object.keys(map).length
}
