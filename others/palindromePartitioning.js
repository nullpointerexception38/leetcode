const memo = {}

function partition(s) {
  if (typeof memo[s] !== 'undefined') {
    return memo[s]
  }
  const { length } = s
  if (length === 1) {
    memo[s] = [[s]]
    return [[s]]
  }
  const res = []
  if (isPalindrome(s)) {
    res.push([s])
  }
  for (let i = 1; i < length; i++) {
    const first = s.slice(0, i)
    const second = s.slice(i)
    const isFirstPalindrome = isPalindrome(first)
    const isSecondPalindrome = isPalindrome(second)
    if (isFirstPalindrome && isSecondPalindrome) {
      res.push([first, second])
    }
    else if (isFirstPalindrome) {
      res.push([first, ...second.split('')])
    } else if (isSecondPalindrome) {
      res.push([...first.split(''), second])
    } else {
      res.push([...first.split(''), ...second.split('')])
    }
    const p1s = partition(first)
    const p2s = partition(second)
    for (const p1 of p1s) {
      for (const p2 of p2s) {
        res.push([...p1, ...p2])
      }
    }
  }
  memo[s] = uniq(res)
  return memo[s]
}

function uniq(arrs) {
  const res = []
  let used = new Set()
  for (const arr of arrs) {
    const key = arr.toString()
    if (used.has(key)) {
      continue
    }
    res.push(arr)
    used.add(key)
  }
  return res
}

function reverseStr(str) {
  return str.split('').reverse().join('')
}

function isPalindrome(str) {
  if (str.length <= 1) {
    return true
  }
  if (str.length % 2 === 0) {
    const half = str.length / 2
    return str.slice(0, half) === reverseStr(str.slice(half))
  }
  const mid = Math.floor(str.length / 2)
  return str.slice(0, mid) === reverseStr(str.slice(mid + 1))
}
