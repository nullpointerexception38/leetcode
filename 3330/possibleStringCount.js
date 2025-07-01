function possibleStringCount(word) {
  let repeated = 0
  for (let i = 0; i < word.length; i++) {
    if (word[i - 1] === word[i]) {
      repeated++
    }
  }
  return repeated + 1
}
