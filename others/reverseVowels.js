console.log(reverseVowels('IceCreAm'))

function reverseVowels(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const pos = []
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i].toLowerCase())) {
      pos.push(i)
    }
  }
  const n = pos.length
  const map = {}
  for (let i = 0; i < n; i++) {
    const from = pos[i]
    const to = pos[n - i - 1]
    map[from] = to
  }
  let str = ''
  for (let i = 0; i < s.length; i++) {
    if (i in map) {
      str += s[map[i]]
    }
    else {
      str += s[i]
    }
  }
  return str
}
