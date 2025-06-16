/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
function executeInstructions(n, startPos, s) {
  const res = []
  for (let index = 0; index < s.length; index++) {
    let [i, j] = startPos
    const str = s.slice(index)
    let count = 0
    for (const instruction of str) {
      if (instruction === 'U') {
        i--
      }
      if (instruction === 'R') {
        j++
      }
      if (instruction === 'D') {
        i++
      }
      if (instruction === 'L') {
        j--
      }
      if (i < 0 || j < 0 || i >= n || j >= n) {
        break
      }
      count++
    }
    res.push(count)
  }
  return res
}
