function diffWaysToCompute(expression) {
  const [values, signs] = normalize(expression)
  if (values.length === 1) {
    return values
  }
  const indices = values.map((_, i) => i)
  const cases = compute(indices)
  const uniqueCases = unique(cases)
  const getSign = arr => Array.isArray(arr) ? getSign(arr[0]) : signs[arr - 1]
  const caseToSum = c => {
    const [a, b] = c
    const firstArray = Array.isArray(a)
    const secondArray = Array.isArray(b)
    if (!firstArray && !secondArray) {
      const sign = signs[b - 1]
      return calculate(values[a], sign, values[b])
    }
    if (firstArray && secondArray) {
      const first = caseToSum(a)
      const second = caseToSum(b)
      const sign = getSign(b)
      return calculate(first, sign, second)
    }
    if (firstArray) {
      const first = caseToSum(a)
      const sign = signs[b - 1]
      return calculate(first, sign, values[b])
    }
    if (secondArray) {
      const second = caseToSum(b)
      const sign = getSign(b)
      return calculate(values[a], sign, second)
    }
  }
  const res = []
  for (const c of uniqueCases) {
    res.push(caseToSum(c))
  }
  return res
}

function unique(cases) {
  const arr = []
  const used = new Set()
  for (const c of cases) {
    const key = JSON.stringify(c)
    if (used.has(key)) {
      continue
    }
    arr.push(c)
    used.add(key)
  }
  return arr
}

function calculate(a, sign, b) {
  switch (sign) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    default:
      throw new Error(`Unexpected sign: ${sign}`)
  }
}

function normalize(expression) {
  const signs = []
  const values = []
  let str = ''
  for (const char of expression) {
    if (['+', '-', '*'].includes(char)) {
      signs.push(char)
      values.push(parseInt(str, 10))
      str = ''
    } else {
      str += char
    }
  }
  if (str) {
    values.push(parseInt(str, 10))
  }
  return [values, signs]
}

function compute(indices) {
  const { length } = indices
  if (length <= 1) {
    return indices
  }
  const arrs = []
  for (let i = 1; i < length; i++) {
    const prev = indices[i - 1]
    const current = indices[i]
    const front = indices.slice(0, i - 1)
    const rear = indices.slice(i + 1)
    const arr = compute([...front, [prev, current], ...rear])
    arrs.push(...arr)
  }
  return arrs
}
