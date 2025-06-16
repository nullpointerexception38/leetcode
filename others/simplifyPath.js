console.log(simplifyPath(
  '/a//b////c/d//././/..'
))

function simplifyPath(path) {
  const dirs = []
  let temp = ''
  const handleTemp = () => {
    if (temp === '.') {
      //
    }
    else if (temp === '..') {
      dirs.pop()
    } else if (temp) {
      dirs.push(temp)
    }
    temp = ''
  }
  for (const c of path) {
    if (c === '/') {
      handleTemp()
    } else {
      temp += c
    }
  }
  handleTemp()
  return '/' + dirs.join('/')
}
