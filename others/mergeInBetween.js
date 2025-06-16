function mergeInBetween(list1, a, b, list2) {
  let node = list1
  let count = 0
  let start
  let end
  while (node) {
    if (count + 1 === a) {
      start = node
    }
    if (count === b) {
      start.next = list2
      lastNode = getLastNode(list2)
      lastNode.next = node.next
      return list1
    }
    node = node.next
    count++
  }
  return list1
}

function getLastNode(list) {
  let node = list
  while (node) {
    if (!node.next) {
      return node
    }
    node = node.next
  }
}
