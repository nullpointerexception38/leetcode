function findTheLongestSubstring(str) {
  let mask = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const map = new Map()
  map.set(0, -1)
  let ans = 0
  for (let i = 0; i < str.length; i++) {
    const c = str[i]
    const index = vowels.indexOf(c)
    if (index !== -1) {
      mask ^= 1 << index
      if (!map.has(mask)) {
        map.set(mask, i)
      }
    }
    ans = Math.max(ans, i - map.get(mask))
  }
  return ans
}
