/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
function buildArray(target, n) {
  const res = []
  let targetIndex = 0
  for (let i = 1; i <= n; i++) {
    if (target[targetIndex] === i) {
      res.push('Push')
      if (target[targetIndex] === n) {
        break
      }
      targetIndex++
      if (targetIndex >= target.length) {
        break
      }
    } else {
      res.push('Push')
      res.push('Pop')
    }
  }
  return res
}
