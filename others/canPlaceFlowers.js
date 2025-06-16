function canPlaceFlowers(flowerbed, n) {
  let count = 0
  for (let i = 0; i < flowerbed.length; i++) {
    const prev = flowerbed[i - 1] ?? 0
    const next = flowerbed[i + 1] ?? 0
    if (prev === 0 && flowerbed[i] === 0 && next === 0) {
      flowerbed[i] = 1
      count++
    }
  }
  console.log(count)
  return count >= n
}

console.log(canPlaceFlowers([1,0,0,0,0,1], 2))
