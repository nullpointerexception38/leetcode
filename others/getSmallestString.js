console.log(getSmallestString(
  5, 73
))

/*
console.log(getSmallestString(
  5, 73
))*/

function getSmallestString(n, k) {
  let str = ''
  let current = k - n
  for (let i = 0; i < n; i++) {
    if (current + 1 > 26) {
      str = 'z' + str
      current -= 25
    } else {
      str = String.fromCharCode(current + 1 + 96) + str
      current = 0
    }
  }
  return str
}
