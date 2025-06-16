console.log(addBinary(
  '1010',
  '1011'
))

function addBinary(a, b) {
  const aLength = a.length
  const bLength = b.length
  const n = Math.max(aLength, bLength)
  let answer = ''
  let carry = 0
  for (let i = 0; i < n; i++) {
    const numA = parseInt(a[aLength - i - 1], 10) || 0
    const numB = parseInt(b[bLength - i - 1], 10) || 0
    let sum = numA + numB + carry
    let nextCarry = 0
    while (sum >= 2) {
      sum -= 2
      nextCarry++
    }
    answer = String(sum) + answer
    carry = nextCarry
  }
  if (carry) {
    answer = carry + answer
  }
  return answer
}
