function numOfPairs(nums, target) {
  const lengthMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const { length } = num
    const lengthArr = lengthMap.get(length) ?? []
    lengthArr.push({ i, num })
    lengthMap.set(length, lengthArr)
  }
  let count = 0
  const targetLength = target.length
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const diff = targetLength - num.length
    const lengthArr = lengthMap.get(diff) ?? []
    lengthArr.forEach(row => {
      if (i === row.i) {
        return
      }
      if (num + row.num === target) {
        count++
      }
    })
  }
  return count
}

console.log(numOfPairs(['1', '1', '1'], '11'))
