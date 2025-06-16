function guess(num) {
  const pick = 2
  if (num === pick) {
    return 0
  }
  if (num > pick) {
    return -1
  }
  return 1
}

function guessNumber(n) {
  let start = 1
  let end = n
  while (true) {
    const mid = start + Math.floor((end - start) / 2)
    const res = guess(mid)
    if (res === 0) {
      return mid
    }
    if (res === -1) {
      end = end === mid ? mid - 1 :  mid
    }
    if (res === 1) {
      start = start === mid ? mid + 1 : mid
    }
  }
}
