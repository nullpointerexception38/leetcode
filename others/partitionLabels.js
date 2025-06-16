function partitionLabels(s) {
  const map = {}
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (typeof map[c] === 'undefined') {
      map[c] = { start: i, end: i }
    } else {
      map[c].end = i
    }
  }
  const entries = Object.keys(map).map(key => {
    const { start, end } = map[key]
    return { key, start, end }
  })
  .sort((a, b) => a.start - b.start)
  const [firstEntry] = entries
  const groups = [{ start: firstEntry.start, end: firstEntry.end }]
  let currentGroup = groups[0]
  for (const entry of entries) {
    if (currentGroup.start < entry.start && entry.end < currentGroup.end) {
      continue
    }
    if (entry.start > currentGroup.end) {
      const newEntry = { start: entry.start, end: entry.end }
      groups.push(newEntry)
      currentGroup = newEntry
      continue
    }
    if (currentGroup.start < entry.start && entry.end > currentGroup.end) {
      currentGroup.end = entry.end
    }
  }
  return groups.map(row => row.end - row.start + 1)
}

console.log(partitionLabels('ababcbacadefegdehijhklij'))
