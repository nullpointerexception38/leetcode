console.log(minMaxDifference(11891))

function minMaxDifference(num) {
  const str = String(num)
  const maxChars = []
  const minChars = []
  const minFirst = str[0]
  let maxFirst = ''
  for (const char of str) {
    if (maxFirst === '' && char !== '9') {
      maxFirst = char
    }
    maxChars.push(maxFirst && maxFirst === char ? '9' : char)
    minChars.push(minFirst === char ? '0' : char)
  }
  console.log({
    max: parseInt(maxChars.join(''), 10),
    min: parseInt(minChars.join(''), 10)
  })
  return parseInt(maxChars.join(''), 10) - parseInt(minChars.join(''), 10)
}
