console.log(maxNumberOfFamilies(
  4,
  [[4,3],[1,4],[4,6],[1,7]]
))

function maxNumberOfFamilies(n, reservedSeats) {
  const seatMap = groupBy(reservedSeats, seat => seat[0])
  let count = 0
  for (const [i, seatsTaken] of seatMap) {
    count += countGroup(seatsTaken)
  }
  return count + ((n - seatMap.size) * 2)
}

function groupBy(arr, fn) {
  return arr.reduce((map, row) => {
    const key = fn(row)
    const set = map.get(key) ?? new Set()
    set.add(row[1])
    map.set(key, set)
    return map
  }, new Map())
}

function countGroup(set) {
  const hasLeft = !set.has(2) && !set.has(3) && !set.has(4) && !set.has(5)
  const hasRight = !set.has(6) && !set.has(7) && !set.has(8) && !set.has(9)
  if (hasLeft && hasRight) {
    return 2
  }
  if (hasLeft || hasRight) {
    return 1
  }
  const hasCenter = !set.has(4) && !set.has(5) && !set.has(6) && !set.has(7)
  if (hasCenter) {
    return 1
  }
  return 0
}
