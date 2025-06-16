function subarrayLCM(nums, k) {
  const kCount = nums.filter(num => num === k).length
  const n = nums.length
  let count = 0
  for (let i = 1; i < n; i++) {
    let res = lcm(nums[i - 1], nums[i])
    if (res > k) {
      continue
    }
    if (res === k) {
      count++
    }
    for (let j = i + 1; j < n; j++) {
      res = lcm(res, nums[j])
      if (res > k) {
        break
      }
      if (res === k) {
        count++
      }
    }
  }
  return count + kCount
}

function gcd(a, b) {
  let _a = a
  let _b = b
  while (true) {
    if (_b === 0) {
      return _a
    }
    const nextA = _b
    const nextB = _a % _b
    _a = nextA
    _b = nextB
  }
}

function lcm(a, b) {
  return (a * b) / gcd(a, b)
}

console.log(subarrayLCM(
  require('./nums.js'),
  472
))
