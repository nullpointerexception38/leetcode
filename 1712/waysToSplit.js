console.log(waysToSplit([1,2,2,2,5,0]))

function waysToSplit(nums) {
  const n = nums.length
  const sums = Array.from({ length: n }).fill(0)
  const mod = 1e9 + 7
  let sum = 0
  let answer = 0
  for (let i = 0; i < n; i++) {
    sum += nums[i]
    sums[i] = sum
  }
  for (let i = 0, j = 0, k = 0; i < n; i++) {
    j = Math.max(i + 1, j)
    while (j < n - 1 && sums[i] > sums[j] - sums[i]) {
      j++
    }
    k = Math.max(k, j)
    while (k < n - 1 && sums[k] - sums[i] <= sum - sums[k]) {
      k++
    }
    answer += k - j
  }
  return answer % mod
}
