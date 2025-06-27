console.log(medianOfUniquenessArray(
  [91,64,76,18,61,55,46,93,65,99]
))

function medianOfUniquenessArray(nums) {
  const n = nums.length
  const subArrCount = n * (n + 1) / 2
  const midIndex = Math.floor((subArrCount - 1) / 2) + 1
  const check = k => {
    let left = 0
    const map = new Map()
    let arrCount = 0
    for (let i = 0; i < n; i++) {
      const num = nums[i]
      map.set(num, (map.get(num) ?? 0) + 1)
      while (map.size > k) {
        const dropped = nums[left++]
        const count = map.get(dropped)
        if (count === 1) {
          map.delete(dropped)
        }
        else {
          map.set(dropped, count - 1)
        }
      }
      arrCount += i - left + 1
    }
    return arrCount
  }
  let start = 1
  let end = n
  let answer = n
  while (start <= end) {
    const x = start + (end - start >> 1)
    if (check(x) >= midIndex) {
      // left
      end = x - 1
      answer = x
    }
    else {
      start = x + 1
    }
  }
  return answer
}
