function restoreIpAddresses(s) {
  const { length } = s
  if (length < 4 || length > 12) {
    return []
  }
  const strs = restore(s)
  const set = new Set(strs.filter(s => /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/.test(s)))
  return Array.from(set)
}

function restore(s) {
  const { length } = s
  if (length <= 0) {
    return []
  }
  const res = []
  for (let i = 1; i <= 3; i++) {
    const head = s.slice(0, i)
    const rest = s.slice(i)
    if (rest.length === 0) {
      res.push(head)
    } else {
      const tails = restore(s.slice(i))
      for (const tail of tails) {
        res.push(head + '.' + tail)
      }
    }
  }
  return res
}

console.log(restoreIpAddresses('0000'))
