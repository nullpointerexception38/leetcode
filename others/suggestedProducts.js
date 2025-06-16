class TrieNode {
  constructor() {
    this.nodes = {}
    this.end = false
  }

  has(char) {
    return char in this.nodes
  }

  get(char) {
    return this.nodes[char]
  }

  set(char, node) {
    if (char in this.nodes) {
      return
    }
    this.nodes[char] = node
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  insert(word) {
    let prev = this.root
    for (const char of word) {
      const node = prev.get(char) ?? new TrieNode()
      prev.set(char, node)
      prev = node
    }
    prev.end = true
  }

  search(prefix, root) {
    let res = []
    const lastChar = prefix[prefix.length - 1]
    const target = root.get(lastChar)
    if (!target) {
      return [[], null]
    }
    const queue = [[target, prefix]]
    while (queue.length > 0) {
      const [node, prefix] = queue.shift()
      if (node.end) {
        res.push(prefix)
      }
      const chars = Object.keys(node.nodes)
      for (const char of chars) {
        const nextNode = node.nodes[char]
        queue.push([nextNode, prefix + char])
      }
    }
    res.sort()
    if (res.length > 3) {
      res = res.slice(0, 3)
    }
    return [res, target]
  }
}

console.log(suggestedProducts(
  require('./products.js'),
  'ilpxatcgvfblxfvbnoxgmmpvimowoccdedkaqiexrcvxpuaiypkycxoeirqztcaiamkdetaiukcnwdnxdqkbrlywrywcjmtvaleckwduejlayguredkubbcqhtiafhcsmlgdmpcdouxdyxykmujehtpkjqfbrbyehjcnymgumqwbfouubonhzhvssjmpudpvjtdlurkbwyahtclafjaztcdxstgpsvhbbyndqhfkyycxnrvitcasubhnaeolgmmmedgzqtpjjhtlkwqcnjgwehbriwiklwniobbzhegbisgwccvstmdqyneolakaakrnzhmczxdoxhelbezsggbrzlzrrecyvzvrteofqopamraasigegtovcspphlpmsxsfkouohlwdvgrttzltyojunyvmlmhjjihubmkkbrvsbbdiejimobknxcwntoaqltofqopslhzobiuqhlxivctogflejhdlulda'
))

// ["ilpsokmmniywxgbeqrpsaqeqn","ilpxatcfeexjqxghbengdcvsljajqaxidzitqjfjpovxmijvofntfelqidcbekzecqodiralswkjqckrpz","ilpxatcgvfblxfvbnjyryxxfayspcrqkvyopfzspzmmhhalwjvfhsgybgkzctlqtr"]

function suggestedProducts(products, searchWord) {
  const trie = new Trie()
  for (const product of products) {
    trie.insert(product)
  }
  const { length } = searchWord
  const res = Array.from({ length }, () => [])
  let node = trie.root
  for (let i = 0; i < searchWord.length; i++) {
    const [words, _node] = trie.search(searchWord.slice(0, i + 1), node)
    if (words.length === 0) {
      break
    }
    res[i] = words
    node = _node
  }
  return res
}
