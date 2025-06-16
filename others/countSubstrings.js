console.log(countSubstrings('aca'))

function countSubstrings(s) {
  const map = new Map()
  const countPalindromicSubstrings = str => {
    if (map.has(str)) {
      return map.get(str)
    }
    const { length } = str
    if (length === 1) {
      return 1
    }
    let count = length
    for (let i = 2; i <= length; i++) {
      for (let j = 0; (j + i) <= length; j++) {
        if (isPalindrome(str.slice(j, j + i))) {
          count++
        }
      }
    }
    map.set(str, count)
    return count
  }
  return countPalindromicSubstrings(s)
}

function isPalindrome(str) {
  const { length } = str
  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (str[i] !== str[length - i - 1]) {
      return false
    }
  }
  return true
}
