console.log(smallestRange(
  [[-5,-4,-3,-2,-1],[1,2,3,4,5]]
))

function smallestRange(lines) {
  const nums = Array.from(new Set(lines.reduce((arr, line) => arr.concat(line), []).sort((a, b) => a - b)))
  const map = new Map()
  for (let i = 0; i < lines.length; i++) {
    for (const num of lines[i]) {
      const ids = map.get(num) ?? []
      ids.push(i)
      map.set(num, ids)
    }
  }
  const k = lines.length
  const memo = new Map()
  let left = 0
  let min = Infinity
  let answer = []
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const ids = map.get(num)
    for (const id of ids) {
      if (memo.has(id)) {
        memo.delete(id)
        left = memo.values().next().value ?? i
      }
      memo.set(id, i)
    }
    const distance = nums[i] - nums[left]
    if (memo.size === k && distance < min) {
      min = distance
      answer = [nums[left], nums[i]]
    }
  }
  return answer
}
