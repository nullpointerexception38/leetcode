const arr = require('./arr.js')
console.log(superPow(78267, arr))

function superPow(a, b) {
  const m = 1337
  const { length } = b
  let product = pow(a, b[0], m)
  for (let i = 1; i < length; i++) {
    product = pow(product, 10, m) * pow(a, b[i], m) % m
  }
  return product
}

function pow(a, b, m) {
  if (b === 0) {
    return 1
  }
  const power = b > 0 ? Math.floor(b / 2) : Math.ceil(b / 2)
  const half = pow(a, power, m)
  if (b % 2 === 0) {
    return (half * half) % m
  }
  return b > 0 ? (half * half * a) % m : (half * half / a) % m
}
