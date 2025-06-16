console.log(closestMeetingNode(
  [2,3,3,4,-1],
  0,
  1
))

function closestMeetingNode(edges, node1, node2) {
  const n = edges.length
  const m1 = Array(n).fill(-1)
  const m2 = Array(n).fill(-1)
  const dfs = (start, map) => {
    let i = start
    map[i] = 0
    while (edges[i] !== -1 && map[edges[i]] === -1) {
      map[edges[i]] = map[i] + 1
      i = edges[i]
    }
  }
  dfs(node1, m1)
  dfs(node2, m2)
  let min = Infinity
  let answer = -1
  for (let i = 0; i < n; i++) {
    if (m1[i] !== -1 && m2[i] !== -1) {
      const max = Math.max(m1[i], m2[i])
      if (max < min) {
        min = Math.min(min, max)
        answer = i
      }
    }
  }
  return answer
}
