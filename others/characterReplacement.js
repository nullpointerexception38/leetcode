function characterReplacement(str, k) {
  let maxCount = 0
  let count = Array.from({ length: 26 }).fill(0)
  let left = 0
  let res = 0
  for (let right = 0; right < str.length; right++) {
    const charIndex = str[right].charCodeAt(0) - 65
    count[charIndex]++
    maxCount = Math.max(maxCount, count[charIndex])
    if (right - left + 1 - maxCount > k) {
      count[str[left].charCodeAt(0) - 65]--
      left++
    }
    res = Math.max(res, right - left + 1)
  }
  return res
}
