console.log(multiply('123', '987'))

function multiply(numStr1, numStr2) {
  if (numStr1 === '0' || numStr2 === '0') {
    return '0'
  }
  const [n1, n2] = numStr1.length < numStr2.length ? [numStr1, numStr2] : [numStr2, numStr1]
  const arr = []
  for (let i = 0; i < n1.length; i++) {
    let str = ''
    let carry = 0
    for (let j = 0; j < n2.length; j++) {
      const num1 = toNumber(n1[n1.length - 1 - i])
      const num2 = toNumber(n2[n2.length - 1 - j])
      const res = num1 * num2 + carry
      const remainder = res % 10
      carry = (res - remainder) / 10
      str = String(remainder) + str
    }
    if (carry) {
      arr.push(carry + str + '0'.repeat(i))
    } else {
      arr.push(str + '0'.repeat(i))
    }
  }
  console.log('arr', arr)
  return arr.reduce((prev, current) => add(prev, current))
}

function add(numStr1, numStr2) {
  console.log(numStr1, numStr2)
  const [n1, n2] = numStr1.length < numStr2.length ? [numStr1, numStr2] : [numStr2, numStr1]
  let str = ''
  let carry = 0
  for (let i = 0; i < n2.length; i++) {
    const num2 = toNumber(n2[n2.length - 1 - i])
    const num1 = toNumber(n1[n1.length - 1 - i])
    const res = num1 + num2 + carry
    const remainder = res % 10
    carry = (res - remainder) / 10
    str = String(remainder) + str
  }
  if (carry) {
    return carry + str
  }
  return str
}

function toNumber(char) {
  if (typeof char === 'undefined') {
    return 0
  }
  return char.charCodeAt(0) - 48
}
