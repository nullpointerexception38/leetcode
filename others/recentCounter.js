class RecentCounter {
  constructor() {
    this.ts = []
  }
  ping(t) {
    const { ts } = this
    ts.push(t)
    const start = t - 3000
    this.ts = ts.filter(_t => _t >= start)
    return this.ts.length
  }
}
