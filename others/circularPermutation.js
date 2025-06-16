function circularPermutation(n, start) {
  const grayCodes = getGrayCodes(n)
  const startCode = start.toString(2).padStart(n, '0')
  const index = grayCodes.findIndex(code => startCode === code)
  return [...grayCodes.slice(index), ...grayCodes.slice(0, index)].map(char => parseInt(char, 2))
}

function getGrayCodes(n) {
  if (n === 1) {
    return ['0', '1']
  }
  const previousGrayCodes = getGrayCodes(n - 1)
  const l1 = previousGrayCodes.map(char => '0' + char)
  const l2 = previousGrayCodes.reverse().map(char => '1' + char)
  return [...l1, ...l2]
}
