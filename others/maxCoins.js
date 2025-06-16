function maxCoins(piles) {
  const size = piles.length
  const sortedPiles = piles.slice().sort((a, b) => a - b)
  const count = sortedPiles.length / 3
  let amount = 0
  for (let i = 0; i < count; i++) {
    const index = size - 2 - (i * 2)
    amount += sortedPiles[index]
  }
  return amount
}
