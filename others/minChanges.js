function minChanges(s) {
  let count = 0
  for (let i = 0; i < s.length; i += 2) {
    const [first, second] = s.slice(i, i + 2)
    if (first !== second) {
      count++
    }
  }
  return count
}

console.log(minChanges('10010101'))
