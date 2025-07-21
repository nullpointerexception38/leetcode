function findLengthOfShortestSubarray(arr) {
  const n = arr.length
  let j = n - 1
  while (j > 0 && arr[j - 1] <= arr[j]) {
    j--
  }
  if (j === 0) {
    return 0
  }
  let res = j
  for (let i = 0; i < n; i++) {
    if (i > 0 && arr[i - 1] > arr[i]) {
      break
    }
    while (j < n && arr[i] > arr[j]) {
      j++
    }
    res = Math.min(res, j - i - 1)
  }
  return res
}
