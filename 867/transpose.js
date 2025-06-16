function transpose(matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const answer = Array.from({ length: n }, () => Array(m))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      answer[j][i] = matrix[i][j]
    }
  }
  return answer
}
