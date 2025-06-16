function subdomainVisits(cpdomains) {
  const map = new Map()
  for (const str of cpdomains) {
    const [countStr, cpdomain] = str.split(' ')
    const count = parseInt(countStr, 10)
    const domains = splitCountPairedDomains(cpdomain)
    for (const domain of domains) {
      if (map.has(domain)) {
        map.set(domain, map.get(domain) + count)
      } else {
        map.set(domain, count)
      }
    }
  }
  let res = []
  map.forEach((value, key) => {
    res.push(`${key} ${value}`)
  })
  return res
}

function splitCountPairedDomains(cpdomain) {
  const domains = [cpdomain]
  const arr = cpdomain.split('.')
  while (arr.length > 1) {
    arr.shift()
    domains.push(arr.join('.'))
  }
  return domains
}

console.log(subdomainVisits(['9001 discuss.leetcode.com']))
