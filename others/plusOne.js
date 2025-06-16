function plusOne(digits) {
  const answer = digits.slice()
  let carry = 1
  for (let i = answer.length - 1; i >= 0; i--) {
    const sum = answer[i] + carry
    answer[i] = sum % 10
    carry = Math.floor(sum / 10)
  }
  if (carry > 0) {
    answer.unshift(carry)
  }
  return answer
}
