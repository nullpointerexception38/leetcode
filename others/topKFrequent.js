function topKFrequent(nums, k) {
  const map = new Map()
  const items = []
  for (const num of nums) {
    const existedItem = map.get(num)
    if (existedItem) {
      existedItem.count++
    }
    else {
      const item = { num, count: 1 }
      items.push(item)
      map.set(num, item)
    }
  }
  return items.sort((a, b) => b.count - a.count).slice(0, k).map(item => item.num)
}
