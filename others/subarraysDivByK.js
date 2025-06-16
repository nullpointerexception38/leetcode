function subarraysDivByK(nums, k) {
  const map = new Map([[0, 1]])
  let count = 0
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    const remainder = (sum % k + k) % k
    const remainderCount = map.get(remainder) ?? 0
    count += remainderCount
    map.set(remainder, remainderCount + 1)
  }
  return count
}
