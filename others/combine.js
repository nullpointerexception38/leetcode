function combine(n, k) {
  return Array.from({ length: n })
    .reduce((arrs, _, i) => {
      const newArrs = []
      for (const arr of arrs) {
        if (arr.length + 1 <= k) {
          newArrs.push(arr.concat(i + 1))
        }
      }
      return arrs.concat(newArrs)
    }, [[]])
    .filter(arr => arr.length === k)
}
