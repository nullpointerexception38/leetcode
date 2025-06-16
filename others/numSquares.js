console.log(numSquares(1))

function numSquares(n) {
  if (n < 4) {
    return n
  }
  const dp = [1]
  const squares = []
  loop: for (let i = 1; i <= n; i++) {
    const root = Math.sqrt(i)
    if (Number.isInteger(root) && root !== 1) {
      squares.push(i)
      dp[i] = 1
    }
    else {
      let min = Number.MAX_SAFE_INTEGER
      for (let j = squares.length - 1; j >= 0; j--) {
        const square = squares[j]
        if (i % square === 0 && (i / square) < min) {
          min = i / square
        }
        else {
          const num = dp[square] + dp[i - square]
          if (num < min) {
            min = num
          }
        }
      }
      dp[i] = Math.min(dp[i - 1] + 1, min)
    }
  }

  return dp[n]
}
