console.log(eraseOverlapIntervals([[-52,31],[-73,-26],[82,97],[-65,-11],[-62,-49],[95,99],[58,95],[-31,49],[66,98],[-63,2],[30,47],[-40,-26]]))

function eraseOverlapIntervals(intervals) {
  intervals.sort((a, b) => a[1] - b[1])
  let count = 0
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i - 1][1] > intervals[i][0]) {
      count++
      intervals[i] = intervals[i - 1]
    }
  }
  return count
}
