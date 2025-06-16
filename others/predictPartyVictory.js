function predictPartyVictory(senate) {
  const senators = senate.split('')
  let i = 0
  let count = 0
  while (i < senators.length) {
    const senator = senators[i]
    if (senator === 'R') {
      if (count < 0) {
        senators.push('D')
      }
      count++
    }
    else {
      if (count > 0) {
        senators.push('R')
      }
      count--
    }
    i++
  }
  return count > 0 ? 'Radiant' : 'Dire'
}

function log(chars, index, index2) {
  let str = ''
  for (let i = 0; i < chars.length; i++) {
    if (i === index) {
      str += `[${chars[i]}] `
    }
    else if (i === index2) {
      str += `|${chars[i]}| `
    }
    else {
      str += `${chars[i]} `
    }
  }
  console.log(str)
}
