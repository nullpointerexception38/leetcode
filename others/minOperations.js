function minOperations(n) {
  const half = parseInt(n / 2, 10)
  return (n * half) - (half * half)
}

console.log(minOperations(3))
