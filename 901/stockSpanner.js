class StockSpanner {
  constructor() {
    this.stack = []
  }

  next(price) {
    const { stack } = this
    let span = 1
    while (stack.length > 0 && stack[stack.length - 1][0] <= price) {
      span += stack.pop()[1]
    }
    stack.push([price, span])
    return span
  }
}
