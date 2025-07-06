console.log(getStrongest([6,7,11,7,6,8], 5))

function getStrongest(arr, k) {
  arr.sort((a, b) => a - b)
  const n = arr.length
  const mid = arr[n - 1 >> 1]
  const res = []
  const gt = (i, j) => {
    const iDistance = Math.abs(arr[i] - mid)
    const jDistance = Math.abs(arr[j] - mid)
    return iDistance === jDistance ? arr[i] > arr[j] : iDistance > jDistance
  }
  let i = 0
  let j = n - 1
  while (i <= j && res.length < k) {
    if (gt(i, j)) {
      res.push(arr[i])
      i++
    }
    else {
      res.push(arr[j])
      j--
    }
  }
  return res
}
