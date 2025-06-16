function lenLongestFibSubseq(arr) {
  const { length } = arr
  const set = arr.reduce((obj, num, i) => Object.assign(obj, { [num]: i }), {})
  const check = (i, j, count) => {
    const index = set[arr[i] + arr[j]]
    if (typeof index !== 'undefined') {
      return check(j, index, count + 1)
    }
    return count
  }
  let maxCount = 0
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      const count = check(i, j, 0)
      maxCount = Math.max(maxCount, count)
    }
  }
  return maxCount === 0 ? 0 : maxCount + 2
}

console.log(lenLongestFibSubseq(
  [1,2,3,4,5,6,7,8]
))
