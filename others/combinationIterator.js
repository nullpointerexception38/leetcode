class CombinationIterator {
  constructor(characters, combinationLength) {
    this.index = 0
    this.strs = this.generate(characters, combinationLength)
  }

  next() {
    return this.strs[this.index++]
  }

  hasNext() {
    return typeof this.strs[this.index] !== 'undefined'
  }

  generate(characters, combinationLength) {
    if (combinationLength === 1) {
      return characters.split('')
    }
    const { length } = characters
    const arrs = []
    for (let i = 0; i < length; i++) {
      const target = characters[i]
      for (let j = i + 1; j < length; j++) {
        arrs.push([target + characters[j], characters.slice(j + 1)])
      }
    }
    if (combinationLength === 2) {
      return arrs.map(arr => arr[0])
    }
    let nextArrs = arrs.filter(arr => arr[1].length > 0)
    let currentLength = 3
    while (nextArrs.length > 0) {
      const res = []
      for (const [prefix, rest] of nextArrs) {
        for (let j = 0; j < rest.length; j++) {
          const r = rest[j]
          res.push([prefix + r, rest.slice(j + 1)])
        }
      }
      if (combinationLength === currentLength) {
        return res.map(row => row[0])
      }
      nextArrs = res.filter(row => row[1].length > 0)
      currentLength++
    }
  }
}

const c = new CombinationIterator('abcdefg', 2)
console.log(c.next())
console.log(c.hasNext())
console.log(c.next())
console.log(c.hasNext())
console.log(c.next())
console.log(c.hasNext())
