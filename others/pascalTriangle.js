function generate(n) {
  if (n === 1) {
    return [[1]]
  }
  const template = [[1], [1, 1]]
  if (n === 2) {
    return template
  }
  for (let i = 2; i < n; i++) {
    const row = [1]
    const bottom = template[template.length - 1]
    for (let j = 1; j < bottom.length; j++) {
      row.push(bottom[j - 1] + bottom[j])
    }
    row.push(1)
    template.push(row)
  }
  return template
}
