console.log(isLongPressedName('leelee', 'lleeelee'))

function isLongPressedName(name, typed) {
  const n = name.length
  let i = 0
  let j = 0
  let jStart = 0
  while (i < n && j < typed.length) {
    if (name[i] === typed[j]) {
      j++
    }
    else {
      let iStart = i
      while (name[i] === name[i + 1]) {
        i++
      }
      i++
      if (i >= n) {
        return false
      }
      if (i - iStart > j - jStart) {
        return false
      }
      jStart = j
    }
    if (i > j) {
      return false
    }
  }
  while (i < n - 1 && name[i] === name[i + 1]) {
    i++
  }
  return i === n - 1
}
