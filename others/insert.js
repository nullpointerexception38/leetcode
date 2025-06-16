function insert(intervals, newInterval) {
  if (intervals.length === 0) {
    return [newInterval]
  }
  const [intervalStart, intervalEnd] = newInterval
  let start = 0
  let end = intervals.length
  let lastInterval
  let startIndex = -1
  while (start < end) {
    const mid = start + Math.floor((end - start) / 2)
    lastInterval = intervals[mid]
    const [midStart, midEnd] = lastInterval
    if (midStart <= intervalStart && intervalStart <= midEnd) {
      if (intervalEnd > midEnd) {
        lastInterval[1] = intervalEnd
      }
      startIndex = mid
      break
    }
    if (end - start === 1) {
      if (intervalEnd < midStart) {
        intervals.unshift(newInterval)
        startIndex = mid
      }
      else if (intervalStart < midStart && intervalEnd < midEnd) {
        lastInterval[0] = intervalStart
        startIndex = mid
      }
      else {
        intervals.splice(mid + 1, 0, newInterval)
        startIndex = mid + 1
      }
      break
    }
    // left
    if (intervalStart < midStart) {
      end = mid
      continue
    }
    // right
    if (midEnd < intervalEnd) {
      start = mid
      continue
    }
  }
  lastInterval = intervals[startIndex]
  const [lastStart, lastEnd] = lastInterval
  const prevs = intervals.slice(0, startIndex).filter(([start]) => start < lastStart)
  const res = [...prevs, lastInterval]
  for (let i = startIndex + 1; i < intervals.length; i++) {
    const current = intervals[i]
    const [currentStart, currentEnd] = current
    if (currentEnd < lastEnd) {
      continue
    }
    if (currentStart <= lastEnd && lastEnd <= currentEnd) {
      lastInterval[1] = currentEnd
      continue
    }
    res.push(current)
  }
  return res
}

console.log(insert(
  [[2, 3], [5, 7]],
  [1, 6]
))
