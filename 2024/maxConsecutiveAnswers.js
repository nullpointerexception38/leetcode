function maxConsecutiveAnswers(chars, k) {
  let trues = 0
  let falses = 0
  let left = 0
  let max = 0
  const getCount = () => trues >= falses ? falses : trues
  for (let right = 0; right < chars.length; right++) {
    const char = chars[right]
    char === 'T' ? trues++ : falses++
    while (getCount() > k) {
      chars[left++] === 'T' ? trues-- : falses--
    }
    max = Math.max(max, right - left + 1)
  }
  return max
}
