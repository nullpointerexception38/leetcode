console.log(distributeCandies(10004, 20012))

function distributeCandies(n, limit) {
  let count = 0
  for (let i = 0; i <= Math.min(n, limit); i++) {
    count += Math.max(0, Math.min(limit, n - i) - Math.max(0, n - i - limit) + 1)
  }
  return count
}
