function kidsWithCandies(candies, extraCandies) {
  const max = Math.max(...candies)
  return candies.every(c => c + extraCandies >= max)
}
