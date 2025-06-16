class Node {
  constructor(value) {
    this.value = value
    this.nodeMap = new Map()
    this.ended = false
  }

  get size() {
    return this.nodeMap.size;
  }

  setEnded(ended) {
    this.ended = ended
  }

  insert(value) {
    if (this.has(value)) {
      return this.get(value)
    }
    const node = new Node(value)
    this.nodeMap.set(value, node)
    return node
  }

  has(value) {
    return this.nodeMap.has(value)
  }

  get(value) {
    return this.nodeMap.get(value)
  }
}

class Trie {
  constructor() {
    this.root = new Node()
  }

  insert(word) {
    let node = this.root
    for (const char of word) {
      node = node.insert(char)
    }
    node.setEnded(true)
  }

  search(word) {
    let node = this.root
    for (const char of word) {
      node = node.get(char)
      if (typeof node === 'undefined') {
        return false
      }
    }
    return node.ended
  }

  startsWith(prefix) {
    let node = this.root
    for (const char of prefix) {
      node = node.get(char)
      if (typeof node === 'undefined') {
        return false
      }
    }
    return true
  }
}

const t = new Trie()
t.insert('meet')
console.log('t.search(meet)', t.search('meet'))
t.insert('met')
console.log('t.search(met)', t.search('met'))
t.insert('youtube')
console.log('t.search(youtube)', t.search('youtube'))
console.log('t.startsWith(you)', t.startsWith('you'))
