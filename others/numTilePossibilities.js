function numTilePossibilities(tiles) {
  const res = tiles.split('').reduce((arrs, tile) => {
    return arrs.concat(arrs.flatMap(arr => {
      const size = arr.length
      if (size === 0) {
        return [[tile]]
      }
      const variants = []
      for (let i = 0; i < size + 1; i++) {
        variants.push([...arr.slice(0, i), tile, ...arr.slice(i)])
      }
      return variants
    }))
  }, [[]])
  const obj = res.reduce((o, arr) => Object.assign(o, { [arr.join('')]: true }), {})
  return Object.keys(obj).length - 1
}

console.log(numTilePossibilities('AAB'))
