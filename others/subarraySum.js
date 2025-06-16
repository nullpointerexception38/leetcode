console.log(subarraySum([1], 0))

function subarraySum(nums, k) {
  const map = new Map([[0, 1]])
  let count = 0
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    map.set(sum, (map.get(sum) ?? 0) + 1)
    if (map.has(sum - k)) {
      count += k === 0 ? map.get(sum - k) - 1 : map.get(sum - k)
    }
  }
  return count
}
