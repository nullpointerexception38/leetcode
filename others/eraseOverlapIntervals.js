function eraseOverlapIntervals(intervals) {
  const sortedIntervals = intervals.slice().sort((a, b) => a[0] - b[0])
  let prev = sortedIntervals[0]
  let count = 0
  for (let i = 1; i < sortedIntervals.length; i++) {
    const current = sortedIntervals[i]
    if (prev[1] <= current[0]) {
      prev = current
    }
    else if (prev[0] <= current[0] && prev[1] >= current[1]) {
      prev = current
      count++
    }
    else if (prev[0] <= current[0] && prev[1] <= current[1]) {
      count++
    }
  }
  return count
}
