console.log(maxProfit(
  [1,3,1,5,2,7],
  1
))

function maxProfit(prices, fee) {
  let cash = 0
  let hold = -prices[0]
  let prevCash = 0
  for (let i = 0; i < prices.length; i++) {
    prevCash = cash
    cash = Math.max(prevCash, hold + prices[i] - fee)
    hold = Math.max(hold, cash - prices[i])
  }
  return cash
}
