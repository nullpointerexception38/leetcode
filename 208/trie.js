class TrieNode {
  constructor() {
    this.children = new Map()
    this.end = false
  }

  has(char) {
    return this.children.has(char)
  }

  set(char) {
    if (this.has(char)) {
      return this.children.get(char)
    }
    const node = new TrieNode()
    this.children.set(char, node)
    return node
  }

  get(char) {
    return this.children.get(char)
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  insert(word) {
    let node = this.root
    for (const char of word) {
      node = node.set(char)
    }
    node.end = true
  }

  search(word) {
    let node = this.root
    for (const char of word) {
      node = node.get(char)
      if (!node) {
        return false
      }
    }
    return node.end
  }

  startsWith(word) {
    let node = this.root
    for (const char of word) {
      node = node.get(char)
      if (!node) {
        return false
      }
    }
    return true
  }
}
