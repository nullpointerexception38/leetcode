function grayCode(n) {
  if (n === 0) {
    return [0]
  }
  const prevArr = grayCode(n - 1)
  const arr = []
  const bit = 1 << (n - 1)
  for (let i = prevArr.length - 1; i >= 0; i--) {
    arr.push(prevArr[i] + bit)
  }
  return prevArr.concat(arr)
}
