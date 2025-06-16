console.log(maxSatisfied([4,10,10], [1,1,0], 2))
console.log(maxSatisfied([1,0,1,2,1,1,7,5], [0,1,0,1,0,1,0,1], 3))

function maxSatisfied(customers, grumpy, k) {
  let satisfied = customers.reduce((sum, c, i) => sum + (grumpy[i] ? 0 : c), 0)
  let maxSatisfied = 0
  for (let i = 0; i < customers.length; i++) {
    satisfied += grumpy[i] ? customers[i] : 0
    if (i >= k) {
      satisfied -= grumpy[i - k] ? customers[i - k] : 0
    }
    if (i >= k - 1) {
      maxSatisfied = Math.max(maxSatisfied, satisfied)
    }
  }
  return maxSatisfied
}
