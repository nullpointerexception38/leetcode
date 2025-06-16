function rearrangeArray(arr) {
  const nums = []
  let index = 0
  let positiveIndex = 0
  let negativeIndex = 0
  while (nums.length < arr.length) {
    const shouldBePositive = index % 2 === 0
    const shouldBeNegative = !shouldBePositive
    const positiveNum = arr[positiveIndex]
    const negativeNum = arr[negativeIndex]
    if (shouldBePositive && positiveNum > 0) {
      nums.push(positiveNum)
      positiveIndex++
      index++
      continue
    }
    if (shouldBePositive) {
      positiveIndex++
      continue
    }
    if (shouldBeNegative && negativeNum < 0) {
      nums.push(negativeNum)
      negativeIndex++
      index++
      continue
    }
    if (shouldBeNegative) {
      negativeIndex++
      continue
    }
    index++
  }
  return nums
}
