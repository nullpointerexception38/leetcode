/**
 * @param {number[]} deck
 * @return {number[]}
 **/
function deckRevealedIncreasing(deck) {
  const size = deck.length
  const sortedDeck = deck.slice().sort((a, b) => a - b)
  const nextDeck = new Array(size).fill(null)
  let count = 0
  let flipped = false
  while (count < size) {
    for (let i = 0; i < size; i++) {
      if (nextDeck[i] !== null) {
        continue
      }
      if (flipped === false) {
        nextDeck[i] = sortedDeck.shift()
        count++
      }
      flipped = !flipped
    }
  }
  return nextDeck
}

console.log(deckRevealedIncreasing([17,13,11,2,3,5,7]))
