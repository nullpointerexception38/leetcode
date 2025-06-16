function reconstructQueue(persons) {
  const { length } = persons
  let sortedPersons = persons.slice().sort(([aFirst, aSecond], [bFirst, bSecond]) => {
    return aFirst === bFirst ? aSecond - bSecond : bFirst - aFirst
  })
  const isValidPos = index => {
    const [height, k] = sortedPersons[index]
    let count = 0
    for (let i = 0; i < index; i++) {
      const [previousHeight] = sortedPersons[i]
      if (previousHeight >= height) {
        count++
      }
    }
    return count === k
  }
  let index = 1
  while (index < length) {
    const valid = isValidPos(index)
    if (!valid) {
      const person = sortedPersons[index]
      const [, k] = person
      const rest = [...sortedPersons.slice(0, index), ...sortedPersons.slice(index + 1)]
      rest.splice(k, 0, person)
      sortedPersons = rest
    }
    index++
  }
  return sortedPersons
}

console.log(reconstructQueue(
  [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
))
