class CustomStack {
  constructor(size) {
    this.size = size
    this.stack = []
  }

  push(value) {
    const { stack } = this
    if (stack.length < this.size) {
      stack.push(value)
    }
  }

  pop() {
    const value = this.stack.pop()
    return typeof value === 'undefined' ? -1 : value
  }

  increment(k, value) {
    const { stack } = this
    const end = Math.min(k, stack.length)
    for (let i = 0; i < end; i++) {
      stack[i] += value
    }
  }
}
