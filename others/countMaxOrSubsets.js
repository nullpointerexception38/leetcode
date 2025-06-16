function countMaxOrSubsets(nums) {
  const subsets = getAllSubsets(nums)
  subsets.shift()
  const orResults = getMaxNums(subsets)
  const max = Math.max(...orResults)
  return orResults.filter(num => num === max).length
}

function getAllSubsets(arr) {
  return arr.reduce((subsets, value) => {
    return subsets.concat(subsets.map(set => [value,...set]))
  }, [[]])
}

function getMaxNums(subsets) {
  return subsets.map(nums => {
    let res = 0
    for (const num of nums) {
      res |= num
    }
    return res
  })
}

console.log(countMaxOrSubsets([3,1,2,5]))
