console.log(miceAndCheese(
  [1,1,3,4],
  [4,4,1,1],
  2
))

function miceAndCheese(reward1, reward2, k) {
  const rows = reward1.map((num, i) => [num, reward2[i]])
    .sort((a, b) => (b[0] - b[1]) - (a[0] - a[1]))
  let sum = 0
  for (let i = 0; i < reward1.length; i++) {
    const row = rows[i]
    if (i < k) {
      sum += row[0]
    }
    else {
      sum += row[1]
    }
  }
  return sum
}
