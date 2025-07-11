function threeSumMulti(arr, target) {
  arr.sort((a, b) => a - b)
  const n = arr.length
  const mod = 1e9 + 7
  let count = 0
  for (let i = 0; i < n - 2; i++) {
    let left = i + 1
    let right = n - 1
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right]
      if (sum > target) {
        right--
      }
      else if (sum < target) {
        left++
      }
      else {
        if (arr[left] === arr[right]) {
          const n = right - left
          count += (n * (n + 1)) / 2
          break
        }
        else {
          let _left = 1
          let _right = 1
          while (left < right && arr[left] === arr[left + 1]) {
            _left++
            left++
          }
          while (left < right && arr[right] === arr[right - 1]) {
            _right++
            right--
          }
          count += _left * _right
          left++
          right--
        }
      }
    }
  }
  return count % mod
}