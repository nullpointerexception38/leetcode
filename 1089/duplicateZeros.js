function duplicateZeros(arr) {
  const createStack = (() => {
    const nums = []
    let pos = 0
    return {
      get top() {
        return nums[pos]
      },
      push: num => {
        nums.push(num)
      },
      shift: () => {
        return pos < nums.length ? nums[pos++] : undefined
      }
    }
  })
  const stack = createStack()
  for (let i = 0; i < arr.length; i++) {
    if (typeof stack.top !== 'undefined') {
      stack.push(arr[i])
      if (arr[i] === 0) {
        stack.push(0)
      }
      arr[i] = stack.shift()
    }
    else if (arr[i] === 0) {
      stack.push(0)
    }
  }
}
