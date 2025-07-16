console.log(numSubseq(
  require('./nums.js'),
  579
))

function numSubseq(_nums, target) {
  const nums = new Uint32Array(_nums).sort()
  const n = nums.length
  const mod = 1e9 + 7
  const powers = new Uint32Array(n)
  powers[0] = 1
  for (let i = 1; i < n; i++) {
    powers[i] = (powers[i - 1] * 2) % mod
  }
  let i = 0
  let j = n - 1
  let count = 0
  while (i <= j) {
    const sum = nums[i] + nums[j]
    if (sum > target) {
      j--
    }
    else {
      let power = j - i
      count += powers[j - i]
      i++
    }
  }
  return count % mod
}
