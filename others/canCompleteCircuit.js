function canCompleteCircuit(gases, costs) {
  const { length } = gases
  for (let i = 0; i < length; i++) {
    let currentGas = 0
    let index = i
    let started = false
    while (true) {
      const safeIndex = index % length
      const gas = gases[safeIndex]
      const cost = costs[safeIndex]
      currentGas += gas
      if (cost > currentGas) {
        i = index
        break
      }
      if (started && (index - i) === length + 1) {
        return i
      }
      currentGas -= cost
      index++
      started = true
    }
  }
  return -1
}

console.log(canCompleteCircuit(
  [1,2,3,4,3,2,4,1,5,3,2,4],
  [1,1,1,3,2,4,3,6,7,4,3,1]
))
