class Allocator {
  constructor(size) {
    this.mem = Array.from({ length: size })
  }

  allocate(size, mId) {
    const { mem } = this
    let start = null
    let end = null
    for (let i = 0; i < mem.length; i++) {
      const empty = typeof mem[i] === 'undefined'
      if (empty && start === null) {
        start = i
        end = i
      }
      else if (empty && start !== null) {
        end = i
      }
      if (!empty) {
        start = null
        end = null
      }
      if (start !== null && end !== null && (end - start + 1 === size)) {
        this._allocate(start, end, mId)
        return start
      }
    }
    return -1
  }

  freeMemory(mId) {
    let freed = 0
    this.mem = this.mem.map(value => {
      if (value === mId) {
        freed++
        return undefined
      }
      return value
    })
    return freed
  }

  _allocate(start, end, mId) {
    const { mem } = this
    for (let i = start; i <= end; i++) {
      mem[i] = mId
    }
  }
}

const a = new Allocator(10)
a.allocate(1,1)
a.allocate(1,2)
a.allocate(1,3)
a.freeMemory(2)
console.log(a.allocate(3,4))
console.log(a.mem)
