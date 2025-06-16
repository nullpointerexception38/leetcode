console.log(findMinArrowShots([[9,12],[1,10],[4,11],[8,12],[3,9],[6,9],[6,7]]))

function findMinArrowShots(points) {
  points.sort(([aStart, aEnd], [bStart, bEnd]) => {
    return aStart === bStart ? aEnd - bEnd : aStart - bStart
  })
  let prev = points[0]
  let count = 1
  for (let i = 1; i < points.length; i++) {
    const [prevStart, prevEnd] = prev
    const [start, end] = points[i]
    if (prevEnd >= start) {
      prev = [Math.max(prevStart, start), Math.min(prevEnd, end)]
    }
    else {
      prev = points[i]
      count++
    }
  }
  return count
}
