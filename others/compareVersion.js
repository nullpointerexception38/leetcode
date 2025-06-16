function compareVersion(version1, version2) {
  const getRevisions = version => version.split('.').map(str => parseInt(str, 10))
  let firstRevisions = getRevisions(version1)
  let secondRevisions = getRevisions(version2)
  const length = Math.max(firstRevisions.length, secondRevisions.length)
  for (let i = 0; i < length; i++) {
    const v1 = firstRevisions[i] ?? 0
    const v2 = secondRevisions[i] ?? 0
    if (v1 < v2) {
      return -1
    }
    if (v1 > v2) {
      return 1
    }
  }
  return 0
}

console.log(compareVersion('7.5.2.4', '7.5.1'))
