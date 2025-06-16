function twoEggDrop(n) {
  let sum = 0
  let index = 1
  let count = 0
  while (sum < n) {
    sum += index++
    count++
  }
  return count
}
