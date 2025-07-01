//console.log(numFriendRequests([16,17,18]))
//console.log(numFriendRequests([20,30,100,110,120]))
//console.log(numFriendRequests([16,16]))
//console.log(numFriendRequests([16,16,14,14]))
//console.log(numFriendRequests([8,85,24,85,69]))

console.log(numFriendRequests([54,23,102,90,40,74,112,74,76,21]))

function numFriendRequests(ages) {
  const nums = new Int16Array(ages).sort()
  const n = nums.length
  let left = 0
  let right = 0
  let count = 0
  for (let i = 0; i < n; i++) {
    const x = nums[i]
    while (left < n && nums[left] <= x * 0.5 + 7) {
      left++
    }
    while (right < n && nums[right] <= x) {
      right++
    }
    if (left < right) {
      count += right - left
    }
    if (x > x * 0.5 + 7) {
      count--
    }
  }
  return count
}
