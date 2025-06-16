//console.log(numberOfBoomerangs([[0,0],[1,0],[2,0]]))
//console.log(numberOfBoomerangs([[1,1],[2,2],[3,3]]))
console.log(numberOfBoomerangs([[0,0], [1,0], [2,0], [1,1]]))

function numberOfBoomerangs(points) {
  const { length } = points
  const distanceMap = new Map()
  const pointToKey = point => `${point[0]},${point[1]}`
  for (let i = 0; i < length - 1; i++) {
    const source = points[i]
    for (let j = i + 1; j < length; j++) {
      const target = points[j]
      const a = Math.abs(source[0] - target[0])
      const b = Math.abs(source[1] - target[1])
      const distance = a ** 2 + b ** 2
      const sourceKey = pointToKey(source)
      const targetKey = pointToKey(target)
      const pointMap = distanceMap.get(distance) ?? new Map()

      const sourcePointSet = pointMap.get(sourceKey) ?? new Set()
      sourcePointSet.add(targetKey)
      pointMap.set(sourceKey, sourcePointSet)

      const targetPointSet = pointMap.get(targetKey) ?? new Set()
      targetPointSet.add(sourceKey)
      pointMap.set(targetKey, targetPointSet)

      distanceMap.set(distance, pointMap)
    }
  }

  let count = 0
  for (const [distance, pointMap] of distanceMap) {
    for (const [key, pointSet] of pointMap) {
      if (pointSet.size >= 2) {
        // n 取 k = n! / k! * (n - k)!
        const n = pointSet.size
        const k = 2
        const res = (factorial(n) / (factorial(k) * factorial(n - k))) * 2
        count += res
      }
    }
  }
  return count
}

function factorial(n) {
  let res = 1
  for (let i = 2; i <= n; i++) {
    res *= i
  }
  return res
}
