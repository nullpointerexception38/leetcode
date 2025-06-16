function maxIceCream(costs, coins) {
  const sortedCosts = costs.slice().sort((a, b) => a - b)
  let remainingCoins = coins
  let count = 0
  for (const cost of sortedCosts) {
    if (remainingCoins < cost) {
      return count
    }
    remainingCoins -= cost
    count++
  }
  return count
}
