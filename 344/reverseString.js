function reverseString(arr) {
  let i = 0
  let j = arr.length - 1
  while (i < j) {
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
    i++
    j--
  }
}
