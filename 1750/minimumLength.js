console.log(minimumLength('aabaaa'))

function minimumLength(s) {
  const n = s.length
  let i = 0
  let j = n - 1
  let distance = n
  while (i < j) {
    while (i < n && s[i] === s[i + 1]) {
      i++
    }
    while (j > 0 && s[j] === s[j - 1]) {
      j--
    }
    if (s[i] === s[j]) {
      distance = Math.max(0, j - i - 1)
    }
    else {
      break
    }
    i++
    j--
  }
  return distance
}
