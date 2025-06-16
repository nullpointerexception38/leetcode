class MyQueue {
  constructor() {
    this.items = []
  }

  push(item) {
    this.items.push(item)
  }

  pop() {
    return this.items.shift()
  }

  peek() {
    return this.items[0]
  }

  empty() {
    return this.items.length === 0
  }
}
