class Cluster {
  constructor(from, to) {
    this.computers = new Set([from, to])
  }

  add(computer) {
    this.computers.add(computer)
  }

  has(computer) {
    return this.computers.has(computer)
  }

  merge(cluster) {
    const { computers } = this
    for (const computer of cluster.computers) {
      computers.add(computer)
    }
  }
}

function merge(from, to, existedClusters, clusters) {
  const [first] = existedClusters
  first.add(from)
  first.add(to)
  for (let i = 1; i < existedClusters.length; i++) {
    const existedCluster = existedClusters[i]
    first.merge(existedCluster)
  }
  const existedClusterSet = new Set(existedClusters)
  return clusters.filter(c => {
    if (c === first) {
      return true
    }
    return !existedClusterSet.has(c)
  })
}

function makeConnected(n, connections) {
  const { length } = connections
  const cableCount = n - 1
  if (length < cableCount) {
    return -1
  }
  const checkMap = new Map(Array.from({ length: n }).map((_, i) => [i, false]))
  let clusters = []
  const getClusters = computer => clusters.filter(cluster => cluster.has(computer))
  for (const [from, to] of connections) {
    const existedClusters = [...getClusters(from), ...getClusters(to)]
    if (existedClusters.length > 0) {
      clusters = merge(from, to, existedClusters, clusters)
    } else {
      clusters.push(new Cluster(from, to))
    }
    checkMap.set(from, true)
    checkMap.set(to, true)
  }
  const isolatedComputers = []
  for (const [computer, existed] of checkMap) {
    if (!existed) {
      isolatedComputers.push(computer)
    }
  }
  return clusters.length - 1 + isolatedComputers.length
}

console.log(makeConnected(
  5,
  [[0,1],[0,2],[0,3],[4,5],[3,5]]
))
