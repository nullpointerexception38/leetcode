function findClosestElements(arr, k, x) {
  const n = arr.length
  const lt = (i, j) => {
    const a = arr[i]
    const b = arr[j]
    const aDistance = Math.abs(a - x)
    const bDistance = Math.abs(b - x)
    return ((aDistance === bDistance) && a < b) || aDistance < bDistance
  }
  let i = 0
  let j = n - 1
  while (j - i + 1 > k) {
    if (lt(i, j)) {
      j--
    }
    else {
      i++
    }
  }
  return arr.slice(i, j + 1)
}
