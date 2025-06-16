function subsets(nums) {
  return nums.reduce((res, num) => {
    if (res.length === 0) {
      return [[], [num]]
    }
    return [...res, ...res.map(arr => [...arr, num])]
  }, [])
}

console.log(subsets(
  [1, 2, 3]
))
