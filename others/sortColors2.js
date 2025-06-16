console.log(sortColors([0,1,2,1,1,1,1,0]))

function sortColors(nums) {
  const bucket = Array.from({ length: 3 }).fill(0)
  for (const num of nums) {
    bucket[num]++
  }
  let k = 0
  for (let i = 0; i < bucket.length; i++) {
    for (let j = 0; j < bucket[i]; j++) {
      nums[k++] = i
    }
  }
}
