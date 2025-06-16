function getRow(n) {
  if (n < 2) {
    return Array.from({ length: n + 1 }).fill(1)
  }
  let bottom = getRow(1)
  for (let i = 1; i < n; i++) {
    const row = [1]
    for (let j = 1; j < bottom.length; j++) {
      row.push(bottom[j - 1] + bottom[j])
    }
    row.push(1)
    bottom = row
  }
  return bottom
}

console.log(getRow(2))
