class SnapshotArray {
  constructor(length) {
    this.snapId = -1
    this.history = {}
  }
  set(index, value) {
    this._setHistoryMap(index, value)
  }
  snap() {
    return ++this.snapId
  }
  get(index, snapId) {
    for (let i = snapId - 1; i >= -1; i--) {
      const map = this._getHistoryMap(i)
      if (map && typeof map[index] !== 'undefined') {
        return map[index]
      }
    }
    return 0
  }
  _setHistoryMap(index, value) {
    const { history, snapId } = this
    const map = this._getHistoryMap(snapId)
    map[index] = value
    history[snapId] = map
  }
  _getHistoryMap(snapId) {
    return this.history[snapId] ?? {}
  }
}

/*const s = new SnapshotArray(3)
s.set(0, 5)
console.log(s.history)
s.snap()
s.set(0, 6)
console.log(s.get(0, 0))
console.log(s.history)*/


/*const inputs = ["SnapshotArray","set","snap","set","get"]
const argsArr = [[3],[0,5],[],[0,6],[0,0]]
const expectedArr = [null,null,0,null,5]*/

console.time('START')
const inputs = require('./inputs.js')
const argsArr = require('./argsArr.js')
const expectedArr = require('./expectedArr.js')

let s

for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i]
  const args = argsArr[i]
  const expected = expectedArr[i]
  if (input === 'SnapshotArray') {
    s = new SnapshotArray(...args)
  }
  else {
    const actual = s[input](...args) ?? null
    if (actual !== expected) {
      console.log(`s.${input}(${args})`)
      console.error(`Excepted: ${expected}, actual: ${actual}`)
      process.exit(1)
    }
  }
}
console.log('done', inputs.length)
console.timeEnd('START')
