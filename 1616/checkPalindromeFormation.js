console.log(checkPalindromeFormation(
  'abdef', 'fecab'
))

console.log(checkPalindromeFormation(
  'fecab', 'abdef'
))

function checkPalindromeFormation(a, b) {
  return check(a, b) || check(b, a)
}

function check(a, b) {
  const n = a.length
  const mid = (n >> 1) - 1
  let i = 0
  while (i <= mid) {
    if (a[i] === b[n - i - 1]) {
      i++
    }
    else {
      break
    }
  }
  if (i > mid) {
    return true
  }
  const isPalindrome = (str, start, end) => {
    const mid = start + (end - start >> 1)
    for (let i = start; i < mid; i++) {
      if (str[i] !== str[n - i - 1]) {
        return false
      }
    }
    return true
  }
  return isPalindrome(a, i, n - i) || isPalindrome(b, i, n - i)
}
