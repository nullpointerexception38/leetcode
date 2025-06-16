console.log(lexicalOrder(100))

function lexicalOrder(n) {
  const nums = []
  const dfs = num => {
    if (num > n) {
      return
    }
    nums.push(num)
    for (let i = 0; i <= 9; i++) {
      const next = num * 10 + i
      if (next > n) {
        return
      }
      dfs(next)
    }
  }
  for (let i = 1; i <= 9; i++) {
    if (i > n) {
      break
    }
    dfs(i)
  }
  return nums
}
