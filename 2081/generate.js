kMirror()

function kMirror() {
  const isPalindrome = num => {
    const str = String(num)
    const n = str.length
    for (let i = 0; i < n / 2; i++) {
      if (str[i] !== str[n - i - 1]) {
        return false
      }
    }
    return true
  }
  const reverse = str => str.split('').reverse().join('')
  const genTemplate = (strs, mids) => {
    const arr = []
    for (const str of strs) {
      const head = str.slice(0, Math.floor(str.length / 2))
      const tail = reverse(head)
      for (const mid of mids) {
        arr.push(head + mid + tail)
      }
    }
    return arr
  }
  const countMirrorNums = (strs, base, nums) => {
    if (nums.length >= 30) {
      return nums
    }
    let count = 0
    for (const str of strs) {
      const num = parseInt(str, base)
      if (isPalindrome(String(num))) {
        nums.push(num)
        if (nums.length >= 30) {
          return nums
        }
      }
    }
    return count
  }
  const map = {}
  for (let base = 2; base <= 9; base++) {
    let first = Array.from({ length: base - 1 }).map((_, i) => String(i + 1))
    let second = first.map(s => s + s)
    const oddMid = ['0', ...first]
    const evenMid = ['00', ...second]
    const nums = []
    countMirrorNums(first, base, nums)
    countMirrorNums(second, base, nums)
    for (let i = 3; i <= 30; i++) {
      const even = i % 2 === 0
      const currents = even ? genTemplate(second, evenMid) : genTemplate(second, oddMid)
      countMirrorNums(currents, base, nums)
      if (nums.length >= 30) {
        break
      }
      if (even) {
        first = second
        second = currents
      }
    }
    map[base] = nums
  }
  console.log(map)
}
