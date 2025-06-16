function processQueries(queries, m) {
  const p = new Array(m).fill(0).map((_, index) => index + 1)
  const arr = []
  for (const q of queries) {
    const index = p.indexOf(q)
    arr.push(index)
    const [num] = p.splice(index, 1)
    p.unshift(num)
  }
  return arr
}
