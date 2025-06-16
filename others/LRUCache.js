class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.map = new Map()
    this.age = 0
  }

  get(key) {
    const row = this.map.get(key)
    if (row) {
      row.age = ++this.age
      return row.value
    }
    return -1
  }

  put(key, value) {
    const { map } = this
    if (map.size === this.capacity) {
      let age = Infinity
      let droppedKey
      for (const [k, row] of Array.from(map)) {
        if (row.age < age) {
          age = row.age
          droppedKey = k
        }
      }
      map.delete(droppedKey)
    }
    map.set(key, { value, age: ++this.age })
  }
}

const cache = new LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
console.log(cache.get(1))
cache.put(3, 3)
console.log(cache.get(2))
cache.put(4, 4)
console.log(cache.get(1))
console.log(cache.get(3))
console.log(cache.get(4))
