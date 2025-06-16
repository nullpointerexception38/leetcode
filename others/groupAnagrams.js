function groupAnagrams(strs) {
  const mapTemplate = Array.from({ length: 26 }).fill(0)
  const strMap = strs.reduce((obj, str) => {
    const map = str.split('').reduce((m, char) => {
      m[char.charCodeAt(0) - 97]++
      return m
    }, mapTemplate.slice())
    const mapKey = map.toString()
    if (!obj[mapKey]) {
      obj[mapKey] = []
    }
    obj[mapKey].push(str)
    return obj
  }, {})
  return Object.values(strMap)
}

console.log(groupAnagrams(
  ["eat","tea","tan","ate","nat","bat"]
))
