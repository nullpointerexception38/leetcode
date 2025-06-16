function occurrencesOfElement(nums, queries, x) {
  let times = 0
  const occurrences = nums.reduce((obj, num, i) => num === x ? Object.assign(obj, { [++times]: i }) : obj, {})
  return queries.map(times => typeof occurrences[times] === 'undefined' ? -1 : occurrences[times])
}

console.log(occurrencesOfElement(
  [1,2,3],
  [10],
  5
))
