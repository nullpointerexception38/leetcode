class SmallestInfiniteSet {
  constructor() {
    this.popped = new Set()
  }

  addBack(num) {
    this.popped.delete(num)
  }

  popSmallest() {
    const { popped } = this
    let num = 1
    while (true) {
      if (!popped.has(num)) {
        popped.add(num)
        return num
      }
      num++
    }
  }
}
