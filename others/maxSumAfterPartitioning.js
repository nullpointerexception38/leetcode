function maxSumAfterPartitioning(arr, k) {
  const dp = { '0': 0 }
  for (let i = 1; i <= arr.length; i++) {
    let max = 0
    const start = Math.max(0, i - k)
    console.log(`dp[${i}]`)
    for (let j = start; j < i; j++) {
      const res = dp[j] + (Math.max(...arr.slice(j, i)) * (i - j))
      console.log(` = dp[${j}] + ${Math.max(...arr.slice(0, i - j))} x ${i - j} = ${res}`);
      if (res > max) {
        max = res
      }
    }
    dp[i] = max
    console.log('---------------')
    console.log(`dp[${i}] = ${max}`)
  }
  Object.keys(dp).forEach(key => console.log(`dp[${key}] = ${dp[key]}`))
  return dp[arr.length]
}

maxSumAfterPartitioning([2, 1, 4, 3], 3)
