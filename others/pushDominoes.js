function pushDominoes(dominoes) {
  let _dominoes = dominoes.split('')
  while (true) {
    let touched = false
    const used = new Set()
    const nextDominoes = _dominoes.slice()
    for (let i = 1; i <= _dominoes.length; i++) {
      const left = _dominoes[i - 2]
      const mid = _dominoes[i - 1]
      const right = _dominoes[i]
      if (left === 'R' && mid === '.' && right !== 'L') {
        nextDominoes[i - 1] = 'R'
        touched = true
      }
      else if (left !== 'R' && mid === '.' && right === 'L') {
        nextDominoes[i - 1] = 'L'
        touched = true
      }
    }
    _dominoes = nextDominoes
    if (!touched) {
      break
    }
  }
  return _dominoes.join('')
}

console.log(pushDominoes('.L.R...LR..L..'))
