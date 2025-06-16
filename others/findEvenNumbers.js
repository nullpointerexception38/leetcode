console.log(findEvenNumbers([2, 1, 3, 0]))

function findEvenNumbers(nums) {
  const n = nums.length
  const sorted = nums.slice().sort((a, b) => a - b)
  const firstIndex = sorted.findIndex(num => num !== 0)
  if (firstIndex === -1) {
    return []
  }
  const first = sorted[firstIndex]
  const [second, third] = sorted.filter((_, _i) => _i !== firstIndex)
  const start = first * 100 + second * 10 + third
  const end = sorted[n - 1] * 100 + sorted[n - 2] * 10 + sorted[n - 3]
  const answer = []
  const getCountData = nums => {
    const countData = Array.from({ length: 10 }).fill(0)
    for (const num of nums) {
      countData[num]++
    }
    return countData
  }
  const countData = getCountData(nums)
  const canForm = num => {
    const nums = String(num).split('').map(c => parseInt(c, 10))
    const _countData = getCountData(nums)
    for (let i = 0; i < _countData.length; i++) {
      if (_countData[i] > countData[i]) {
        return false
      }
    }
    return true
  }
  for (let i = start; i <= end; i++) {
    if ((i & 1) === 0 && canForm(i)) {
      answer.push(i)
    }
  }
  return answer
}
