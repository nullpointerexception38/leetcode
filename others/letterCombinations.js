function letterCombinations(digits) {
  const n = digits.length
  const map = [
    ['a', 'b', 'c'], ['d', 'e', 'f'],
    ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']
  ]
  return (function dfs(i, strs) {
    if (i === n) {
      return strs
    }
    const firstDigit = parseInt(digits[i], 10)
    const chars = map[firstDigit - 2]
    let nextStrs
    if (strs.length === 0) {
      nextStrs = chars.slice()
    }
    else {
      nextStrs = []
      for (const str of strs) {
        for (const char of chars) {
          nextStrs.push(str + char)
        }
      }
    }
    return dfs(i + 1, nextStrs)
  })(0, [])
}
