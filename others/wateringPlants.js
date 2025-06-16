function wateringPlants(plants, capacity) {
  let steps = 0
  let volume = capacity
  for (let i = 0; i < plants.length; i++) {
    if (plants[i] <= volume) {
      steps += 1
      volume -= plants[i]
    }
    else {
      steps += (i + (i - -1))
      volume = capacity
      volume -= plants[i]
    }
  }
  return steps
}
