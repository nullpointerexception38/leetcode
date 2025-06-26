console.log(countKConstraintSubstrings('10101', 1))

function countKConstraintSubstrings(s, k) {
  let ones = 0
  let zeros = 0
  let left = 0
  let count = 0
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (char === '1') {
      ones++
    }
    else {
      zeros++
    }
    while (ones > k && zeros > k) {
      if (s[left++] === '1') {
        ones--
      }
      else {
        zeros--
      }
    }
    count += i - left + 1
  }
  return count
}
