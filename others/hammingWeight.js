function hammingWeight(n) {
  return n.toString(2).split('').filter(c => c === '1').length
}
