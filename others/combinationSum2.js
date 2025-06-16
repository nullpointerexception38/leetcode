function combinationSum2(candidates, target) {
  const nums = candidates.filter(num => num <= target).sort((a, b) => a - b)
  const res = []
  ;(function permutate(current, nums, sum, target) {
    let prev = -1
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i]
      if (prev === num) {
        continue
      }
      prev = num
      const rest = nums.slice(i + 1)
      const nextCurrent = [...current, num]
      const nextTarget = sum + num
      if (nextTarget > target) {
        break
      }
      if (nextTarget === target) {
        res.push(nextCurrent.sort((a, b) => a - b))
      } else if (rest.length > 0) {
        permutate(nextCurrent, rest, sum + num, target)
      }
    }
  })([], nums, 0, target)
  return res
}
