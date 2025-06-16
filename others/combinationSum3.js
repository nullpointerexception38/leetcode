function combinationSum3(k, n) {
  const res = []
  ;(function backtrack(start, path, sum) {
    if (path.length === k && sum === n) {
      res.push([...path])
      return
    }
    if (path.length >= k) {
      return
    }
    for (let i = start; i <= 9; i++) {
      path.push(i)
      backtrack(i + 1, path, sum + i)
      path.pop()
    }
  })(1, [], 0)
  return res
}
