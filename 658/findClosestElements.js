console.log(findClosestElements(
  [1,1,1,2,3,4,5], 4, 1
))

function findClosestElements(arr, k, x) {
  const n = arr.length
  const lt = (i, j) => {
    const a = arr[i]
    const b = arr[j]
    const aDistance = Math.abs(a - x)
    const bDistance = Math.abs(b - x)
    return aDistance < bDistance || (aDistance === bDistance) && a < b
  }
  let i = 0
  let j = n - 1
  while (i < j) {
    if (lt(i, j)) {
      j--
    }
    else {
      i++
    }
  }
  const answer = new Int16Array(k)
  let _k = 0
  while (_k < k) {
    if (i === j) {
      answer[_k++] = arr[i]
      i--
      j++
    }
    else if ((i >= 0 && j >= n) || (lt(i, j))) {
      answer[_k++] = arr[i--]
    }
    else {
      answer[_k++] = arr[j++]
    }
  }
  return answer.sort()
}
