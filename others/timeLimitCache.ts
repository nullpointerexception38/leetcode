class TimeLimitedCache {
  constructor() {
    this.map = new Map()
  }
  /**
   * @param {number} key
   * @param {number} value
   * @param {number} duration time until expiration in ms
   * @return {boolean} if un-expired key already existed
   */
  set(key, value, duration) {
    const { map } = this
    const row = map.get(key)
    map.set(key, { value, duration, createdAt: Date.now() })
    return Boolean(row && (Date.now() - row.createdAt) <= row.duration)
  }

  /**
   * @param {number} key
   * @return {number} value associated with key
   */
  get(key) {
    const { map } = this
    const row = map.get(key)
    if (row && (Date.now() - row.createdAt) <= row.duration) {
      return row.value
    }
    return -1;
  }

  /**
   * @return {number} count of non-expired keys
   */
  count() {
    let count = 0
    const now = Date.now()
    this.map.forEach((row, key) => {
      if (now - row.createdAt <= row.duration) {
        count++
      }
    })
    return count
  }
}

const timeLimitedCache = new TimeLimitedCache()
console.log(timeLimitedCache.set(1, 42, 50))
console.log(timeLimitedCache.get(1))
console.log(timeLimitedCache.count())
console.log(timeLimitedCache.get(1))
