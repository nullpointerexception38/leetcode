console.log(maxFreeTime(96, 3, [4,11,16,53], [11,16,27,77]))

function maxFreeTime(eventTime, k, startTime, endTime) {
  const n = startTime.length
  const freeTimes = []
  let prevEnd = 0
  for (let i = 0; i < n; i++) {
    const freeTime = startTime[i] - prevEnd
    freeTimes.push(freeTime)
    prevEnd = endTime[i]
  }
  freeTimes.push(Math.max(0, eventTime - prevEnd))
  const _k = k + 1
  let answer = -Infinity
  let freeTime = 0
  for (let i = 0; i < freeTimes.length; i++) {
    freeTime += freeTimes[i]
    if (i >= _k) {
      freeTime -= freeTimes[i - _k]
    }
    if (i >= _k - 1) {
      answer = Math.max(answer, freeTime)
    }
  }
  return answer
}
