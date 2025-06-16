function maxTurbulenceSize(arr) {
  let oddCount = 1
  let evenCount = 1
  let maxCount = 1
  for (let i = 1; i < arr.length; i++) {
    const prev = arr[i - 1]
    const current = arr[i]
    if (i % 2 === 0) {
      evenCount = prev > current ? evenCount + 1 : 1
      oddCount = prev < current ? oddCount + 1 : 1
    }
    else {
      oddCount = prev > current ? oddCount + 1 : 1
      evenCount = prev < current ? evenCount + 1 : 1
    }
    maxCount = Math.max(maxCount, oddCount, evenCount)
  }
  return maxCount
}
