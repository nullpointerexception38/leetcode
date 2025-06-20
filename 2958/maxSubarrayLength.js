console.log(maxSubarrayLength([1,2,2,1,3], 1))

function maxSubarrayLength(nums, k) {
  const map = new Map()
  let i = 0
  let max = 0
  for (let j = 0; j < nums.length; j++) {
    const num = nums[j]
    let [count, posArr, posIndex] = map.get(num) ?? [0, [], 0]
    if (count >= k) {
      i = Math.max(i, posArr[posIndex] + 1)
      posIndex++
      count--
    }
    posArr.push(j)
    map.set(num, [count + 1, posArr, posIndex])
    max = Math.max(max, j - i + 1)
  }
  return max
}
