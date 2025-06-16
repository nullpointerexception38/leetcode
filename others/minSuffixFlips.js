function minFlips(target) {
  let currentBit = '0'
  let count = 0
  for (const bit of target) {
    if (currentBit !== bit) {
      count++
      currentBit = bit
    }
  }
  return count
}
