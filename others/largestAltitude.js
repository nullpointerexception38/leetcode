function largestAltitude(gain) {
  let maxHeight = 0
  let height = 0
  for (let i = 0; i < gain.length; i++) {
    height += gain[i]
    maxHeight = Math.max(maxHeight, height)
  }
  return maxHeight
}
