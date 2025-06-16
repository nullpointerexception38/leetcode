function minCost(colors, neededTime) {
  let cost = 0
  let nextCost = 0
  for (let i = 1; i < colors.length; i++) {
    if (colors[i - 1] === colors[i]) {
      const t1 = nextCost === 0 ? neededTime[i - 1] : nextCost
      const t2 = neededTime[i]
      if (t1 < t2) {
        cost += t1
        nextCost = t2
      } else {
        cost += t2
        nextCost = t1
      }
    } else {
      nextCost = 0
    }
  }
  return cost
}
