function minimumRefill(plants, capacityA, capacityB) {
  let i = 0
  let j = plants.length - 1
  let a = capacityA
  let b = capacityB
  let times = 0
  while (i <= j) {
    if (i === j) {
      if (a >= b) {
        if (a < plants[i]) {
          a = capacityA
          times++
        }
      }
      else {
        if (b < plants[j]) {
          b = capacityB
          times++
        }
      }
    }
    else {
      if (a < plants[i]) {
        a = capacityA
        times++
      }
      if (b < plants[j]) {
        b = capacityB
        times++
      }
      a -= plants[i]
      b -= plants[j]
    }
    i++
    j--
  }
  return times
}
