class Node {
  constructor(value) {
    this.value = value
    this.map = new Map()
    this.ended = false
  }

  addWord(word) {
    this.value = word[0]
    let node = this
    for (let i = 1; i < word.length; i++) {
      const char = word[i]
      const child = node.map.get(char) ?? new Node(char)
      node.map.set(char, child)
      node = child
    }
    node.ended = true
  }

  search(word) {
    const { value } = this
    const [firstChar] = word
    const isDot = firstChar === '.'
    if (word.length === 1 && isDot) {
      return this.ended
    }
    if (word.length === 1) {
      return value === firstChar && this.ended
    }
    if (value !== firstChar && !isDot) {
      return false
    }
    let node = this
    let prev = null
    for (let i = 1; i < word.length; i++) {
      const isLast = i === word.length - 1
      const char = word[i]
      const isCharDot = char === '.'
      if (isCharDot) {
        const children = Array.from(node.map.values())
        const nextWord = word.slice(i)
        return children.length > 0 && children.some(child => child.search(nextWord))
      }
      const child = node.map.get(char)
      const matched = child && child.value === char
      if (matched) {
        if (isLast) {
          return child.ended
        }
        prev = node
        node = child
        continue
      }
      return false
    }
    return false
  }
}

class WordDictionary {
  constructor() {
    this.map = new Map()
  }

  addWord(word) {
    const { map } = this
    const [firstChar] = word
    const tree = map.get(firstChar) ?? new Node(firstChar)
    tree.addWord(word)
    map.set(firstChar, tree)
  }

  search(word) {
    const [firstChar] = word
    if (firstChar === '.') {
      const children = Array.from(this.map.values())
      return children.length > 0 && children.some(child => child.search(word))
    }
    const tree = this.map.get(firstChar)
    if (tree) {
      return tree.search(word)
    }
    return false
  }
}

function log(node) {
  let str = ''
  const nodes = [[node]]
  while (nodes.length > 0) {
    const arr = nodes.shift()
    if (arr.length === 1) {
      const [target] = arr
      str += `${target.value}${target.ended ? '.' : ''} `
      const children = Array.from(target.map.values())
      nodes.push(children)
    }
    else {
      if (arr.length > 0) {
        str += `[${arr.map(n => n.value + (n.ended ? '.' : '')).join(',')}] `
      }
      arr.forEach(target => {
        const children = Array.from(target.map.values())
        nodes.push(children)
      })
    }
  }
  console.log(str)
}

const w = new WordDictionary()
w.addWord("bad");
w.addWord("dad");
w.addWord("mad");
console.log(w.search("pad")); // return False
console.log(w.search("bad")); // return True
console.log(w.search(".ad")); // return True
console.log(w.search("b..")); // return True
