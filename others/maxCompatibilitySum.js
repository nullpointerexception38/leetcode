console.log(maxCompatibilitySum(
  [[1,1,0],[1,0,1],[0,0,1]],
  [[1,0,0],[0,0,1],[1,1,0]]
))

function maxCompatibilitySum(students, mentors) {
  const n = students.length
  const m = mentors.length
  const compability = []
  for (let i = 0; i < n; i++) {
    const scores = []
    const student = students[i]
    for (let j = 0; j < m; j++) {
      const mentor = mentors[j]
      const score = student.reduce((_score, studentScore, k) => {
        return studentScore === mentor[k] ? _score + 1 : _score
      }, 0)
      scores.push(score)
    }
    compability.push(scores)
  }
  const dp = Array.from({ length: n + 1 })
    .map(() => Array.from({ length: 1 << m }).fill(0))
  for (let i = 0; i < n; i++) {
    for (let mask = 0; mask < (1 << m); mask++) {
      for (let j = 0; j < m; j++) {
        if ((mask >> j) & 1) {
          continue
        }
        const score = compability[i][j]
        dp[i + 1][mask | (1 << j)] = Math.max(
          dp[i + 1][mask | (1 << j)],
          dp[i][mask] + score
        )
      }
    }
  }
  return dp[n][(1 << m) - 1]
}
