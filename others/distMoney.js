/*console.log(distMoney(20, 3))
console.log(distMoney(12, 3))
console.log(distMoney(16, 2))
console.log(distMoney(1, 2))
console.log(distMoney(5, 2))*/
console.log(distMoney(17, 2))

function distMoney(money, children) {
  if (money < children) {
    return -1
  }
  let sum = money - children
  const wallets = Array.from({ length: children }).fill(1)
  let i = 0
  let count = 0
  while (sum >= 7 && count < children) {
    wallets[i] += 7
    sum -= 7
    count++
    i++
  }
  const done = []
  const undone = []
  for (const w of wallets) {
    if (w === 8) {
      done.push(w)
    }
    else {
      undone.push(w)
    }
  }
  const dones = done.length
  const undones = undone.length
  i = 0
  if (undones === 0 && sum > 0) {
    return dones - 1
  }
  while (sum > 0) {
    undone[i] += 1
    sum -= 1
    i++
    i %= undones
  }
  if (undones === 1 && undone[0] === 4) {
    return dones - 1
  }
  return dones
}
