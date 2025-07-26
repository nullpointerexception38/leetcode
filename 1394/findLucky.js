console.log(findLucky([2,2,2,3,3]))

function findLucky(nums) {
  const map = new Map()
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1)
  }
  let res = -1
  for (const [num, count] of map) {
    if (num === count && num > res) {
      res = num
    }
  }
  return res
}
