function countAndSay(n) {
  if (n === 1) {
    return '1'
  }
  return runLengthEncoding(countAndSay(n - 1))
}

console.log(countAndSay(5))

function runLengthEncoding(str) {
  let prev = ''
  let res = ''
  let count = 0
  for (const c of str) {
    if (prev !== c) {
      if (prev !== '') {
        res += `${count}${prev}`
      }
      prev = c
      count = 1
    } else {
      count++
    }
  }
  res += `${count}${prev}`
  return res
}
