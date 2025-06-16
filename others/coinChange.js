function coinChange(coins, amount) {
  const dp = { '0': 0 }
  for (let i = 1; i <= amount; i++) {
    const _coins = coins.filter(coin => coin <= i)
      .reduce((arr, coin) => {
        const prev = dp[i - coin]
        if (prev !== -1) {
          arr.push(1 + prev)
        }
        return arr
      }, [])
    dp[i] = _coins.length === 0 ? -1 : Math.min(..._coins)
  }
  return dp[amount]
}

console.log(coinChange([186,419,83,408], 6249))
