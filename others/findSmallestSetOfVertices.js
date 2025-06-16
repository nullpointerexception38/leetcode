/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
function findSmallestSetOfVertices(n, edges) {
  const map = Array.from({ length: n })
    .reduce((m, _, i) => {
      m.set(i, false)
      return m
    }, new Map())
  for (const [from, to] of edges) {
    map.set(to, true)
  }
  return Array.from(map.keys()).filter(key => map.get(key) === false)
}
