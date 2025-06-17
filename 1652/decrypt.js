function decrypt(code, k) {
  const n = code.length
  const getIndex = i => (i + n) % n
  if (k === 0) {
    return code.map(() => 0)
  }
  if (k > 0) {
    const answer = []
    let sum = 0
    for (let i = 0; i < n + k - 1; i++) {
      sum += code[getIndex(i + 1)]
      if (i >= k) {
        sum -= code[getIndex(i - k + 1)]
      }
      if (i >= k - 1) {
        answer.push(sum)
      }
    }
    return answer
  }
  const answer = []
  const _k = Math.abs(k)
  let sum = 0
  for (let i = 0; i < n + _k - 1; i++) {
    sum += code[getIndex(n + k + i)]
    if (i >= _k) {
      sum -= code[getIndex(n + k + i + k)]
    }
    if (i >= _k - 1) {
      answer.push(sum)
    }
  }
  return answer
}
