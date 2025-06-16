//console.log(maxChunksToSorted([0, 4, 2, 3, 1]))
//console.log(maxChunksToSorted([4, 3, 2, 1, 0]))
console.log(maxChunksToSorted([1, 0, 2, 4, 3]))

function maxChunksToSorted(nums) {
  const { length } = nums
  if (length === 1) {
    return 1
  }
  const sortedNums = nums.slice().sort((a, b) => a - b)
  const indexMap = sortedNums.reduce((map, num, index) => {
    map.set(num, index)
    return map
  }, new Map())
  let prev = null
  const paths = []
  const used = new Set()
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const index = indexMap.get(num)
    if (i === index) {
      continue
    }
    const [start, end] = i < index ? [i, index] : [index, i]
    const key = `${start}:${end}`
    if (!used.has(key)) {
      paths.push([start, end])
      used.add(key)
    }
  }
  if (paths.length === 0) {
    return length
  }
  paths.sort((a, b) => a[0] - b[0])

  console.log(paths)

  let count = 0
  prev = null
  for (const path of paths) {
    const [start, end] = path
    if (prev === null) {
      prev = path
      count += (start - 0)
      count += 1
    } else {
      const [prevStart, prevEnd] = prev
      if (start <= prevEnd) {
        if (end > prev[1]) {
          prev[1] = end
        }
      } else {
        count += 1
        count += (start - prevEnd - 1)
        prev = path
      }
    }
  }
  if (prev) {
    const [prevStart, prevEnd] = prev
    count += (length - 1 - prevEnd)
  }
  return count
}
