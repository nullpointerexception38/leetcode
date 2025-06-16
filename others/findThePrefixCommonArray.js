/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
function findThePrefixCommonArray(a, b) {
  const size = a.length
  const toMap = arr => arr.reduce((obj, num) => Object.assign(obj, { [num]: true }), {})
  const aMap = toMap(a)
  const bMap = toMap(b)
  let res = []
  let count = size
  for (let i = size - 1; i >= 0; i--) {
    const aNum = a[i]
    const bNum = b[i]
    count = Object.keys(aMap).reduce((c, aKey) => bMap[aKey] ? c + 1 : c, 0)
    delete aMap[aNum]
    delete bMap[bNum]
    res.unshift(count)
  }
  return res
}

console.log(findThePrefixCommonArray([1,2,3], [1,3,2]))
