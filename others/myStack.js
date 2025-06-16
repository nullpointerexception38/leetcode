class MyStack {
  constructor() {
    this.stack = []
  }

  push(num) {
    this.stack.push(num)
  }

  pop() {
    return this.stack.pop()
  }

  top() {
    return this.stack[this.stack.length - 1]
  }

  empty() {
    return this.stack.length === 0
  }
}
