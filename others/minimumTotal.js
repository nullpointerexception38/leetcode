function minimumTotal(triangle) {
  const dp = []
  let parents = triangle[0].slice()
  for (let i = 1; i < triangle.length; i++) {
    const nextParents = []
    for (let j = 0; j < parents.length; j++) {
      for (let k = 0; k < 2; k++) {
        const sum = parents[j] + triangle[i][j + k]
        nextParents[j + k] = typeof nextParents[j + k] === 'undefined' ? sum : Math.min(sum, nextParents[j + k])
      }
    }
    parents = nextParents
  }
  return Math.min(...parents)
}
