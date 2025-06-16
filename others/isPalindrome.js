console.log(isPalindrome('0P'))

function isPalindrome(s) {
  const str = s.toLowerCase().replace(/[^a-z0-9]/g, '')
  const { length } = str
  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (str[i] !== str[length - i - 1]) {
      return false
    }
  }
  return true
}
