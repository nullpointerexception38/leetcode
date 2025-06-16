function smallestNumber(pattern) {
  const context = {
    pattern,
    num: 0,
    max: 0,
    decreaseAmount: 0,
    str: '',
    char: ''
  }
  for (let i = 0; i < pattern.length; i++) {
    context.char = pattern[i]
    handleContext(context, i)
  }
  handleContext(context)
  return context.str
}

function handleContext(context, i) {
  const { char, decreaseAmount } = context
  if (char === 'I' && decreaseAmount === 0) {
    context.num = context.max + 1
    context.max++
    context.str += String(context.num)
  }
  else if (char === 'D' && decreaseAmount === 0) {
    context.decreaseAmount = getDecreaseAmount(context.pattern, i)
    context.num = context.max + context.decreaseAmount + 1
    context.max = context.num
    context.str += String(context.num)
  }
  else if (decreaseAmount > 0) {
    context.num--
    context.decreaseAmount--
    context.str += String(context.num)
  }
}

function getDecreaseAmount(pattern, start) {
  let decreaseAmount = 0
  for (let i = start; i < pattern.length; i++) {
    if (pattern[i] === 'D') {
      decreaseAmount++
    } else {
      break
    }
  }
  return decreaseAmount
}
