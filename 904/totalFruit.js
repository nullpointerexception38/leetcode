function totalFruit(fruits) {
  let i = -1
  let j = -1
  let prev = -1
  let prevFruit = -1
  let count = 0
  for (let k = 0; k < fruits.length; k++) {
    const fruit = fruits[k]
    if (i === -1) {
      i = k
    }
    else if (j === -1 && fruit !== fruits[i]) {
      j = k
    }
    else if (i !== -1 && j !== -1 && fruit !== fruits[i] && fruit !== fruits[j]) {
      j = k
      i = prev
    }
    if (fruit !== prevFruit) {
      prevFruit = fruit
      prev = k
    }
    count = Math.max(count, k - i + 1)
  }
  return count
}
