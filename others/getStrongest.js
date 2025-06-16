function getStrongest(arr, k) {
  const nums = arr.slice().sort((a, b) => a - b)
  const mid = nums[Math.floor((nums.length - 1) / 2)]
  console.log(mid)
  const sortedNums = nums.sort((a, b) => {
    const diff = Math.abs(b - mid) - Math.abs(a - mid)
    return diff === 0 ? b - a : diff
  })
  return sortedNums.slice(0, k)
}
