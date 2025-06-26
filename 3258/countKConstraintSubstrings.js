function countKConstraintSubstrings(s, k) {
  const n = s.length
  let count = 0
  for (let i = 0; i < n; i++) {
    let ones = 0
    let zeros = 0
    for (let j = i; j < n; j++) {
      if (s[j] === '1') {
        ones++
      }
      else {
        zeros++
      }
      if (ones > k && zeros > k) {
        break
      }
      count++
    }
  }
  return count
}
