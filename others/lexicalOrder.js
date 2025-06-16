function lexicalOrder(n) {
  return Array.from({ length: n }).map((_, i) => i + 1).sort()
}
