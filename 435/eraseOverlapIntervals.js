console.log(eraseOverlapIntervals([[-52,31],[-73,-26],[82,97],[-65,-11],[-62,-49],[95,99],[58,95],[-31,49],[66,98],[-63,2],[30,47],[-40,-26]]))

function eraseOverlapIntervals(intervals) {
  const sortedIntervals = intervals.sort(([pStart, pEnd], [start, end]) => pStart === start ? pEnd - end : pStart - start)
  console.log(sortedIntervals)
  let [prev] = sortedIntervals
  let count = 0
  for (let i = 1; i < sortedIntervals.length; i++) {
    const [, pEnd] = prev
    const [start, end] = sortedIntervals[i]
    if (pEnd > start) {
      count++
      if (pEnd > end) {
        prev = sortedIntervals[i]
      }
    }
    else {
      prev = sortedIntervals[i]
    }
  }
  return count
}
