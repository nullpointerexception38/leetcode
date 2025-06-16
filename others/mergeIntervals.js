function merge(intervals) {
  const sortedLines = intervals.slice().sort((a, b) => a[0] - b[0]).map(arr => [...arr])
  const { length } = sortedLines
  const lines = []
  let prev = sortedLines[0]
  if (length === 1) {
    return [prev]
  }
  for (let i = 1; i < length; i++) {
    const current = sortedLines[i]
    const isFirst = i === 1
    if (prev[1] < current[0]) {
      if (isFirst) {
        lines.push(prev)
        lines.push(current)
      }
      else {
        lines.push(current)
      }
      prev = current
    }
    else if (prev[0] <= current[0] && prev[1] >= current[1]) {
      if (isFirst) {
        lines.push(prev)
      }
    }
    else {
      if (isFirst) {
        prev = [prev[0], Math.max(prev[1], current[1])]
        lines.push(prev)
      }
      else {
        const nextPrev = [prev[0], Math.max(prev[1], current[1])]
        prev[0] = nextPrev[0]
        prev[1] = nextPrev[1]
      }
    }
  }
  return lines
}

console.log(merge([
  [1,3],[2,6],[8,10],[15,18]
]))
