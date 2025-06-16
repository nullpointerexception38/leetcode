console.log(largestPathValue(
  'abaca',
  [[0,1],[0,2],[2,3],[3,4]]
))

/*
console.log(largestPathValue(
  require('./colors.js'),
  require('./edges.js')
))*/

function topologicalSortKahn(numNodes, edges) {
  // 1. 建立鄰接列表 (adjacency list) 和計算入度 (in-degree)
  const adj = new Array(numNodes).fill(0).map(() => []);
  const inDegree = new Array(numNodes).fill(0);

  for (const [u, v] of edges) {
    adj[u].push(v);
    inDegree[v]++;
  }

  // 2. 初始化佇列，將所有入度為 0 的節點加入
  const queue = [];
  for (let i = 0; i < numNodes; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  const result = [];
  let processedNodes = 0;

  // 3. 處理佇列
  while (queue.length > 0) {
    const u = queue.shift(); // 從佇列中取出節點
    result.push(u);
    processedNodes++;

    // 對於該節點的所有鄰居
    for (const v of adj[u]) {
      inDegree[v]--; // 入度減 1
      if (inDegree[v] === 0) { // 如果入度變為 0，則加入佇列
        queue.push(v);
      }
    }
  }
  if (processedNodes !== numNodes) {
    // 圖中存在環
    return null;
  }
  return [result, adj]
}

function largestPathValue(colors, edges) {
  const n = colors.length
  if (edges.length === 0 && n > 0) {
    return 1
  }
  const res = topologicalSortKahn(n, edges)
  if (res === null) {
    return -1
  }
  const [sources, adj] = res
  const dp = Array.from({ length: n }, () => ({}))
  for (const source of sources) {
    const sourceColor = colors[source]
    dp[source][sourceColor] = (dp[source][sourceColor] ?? 0) + 1
    for (const to of adj[source]) {
      const toColor = colors[to]
      for (const _sourceColor of Object.keys(dp[source])) {
        dp[to][_sourceColor] = Math.max(dp[to][_sourceColor] ?? 0, dp[source][_sourceColor])
      }
    }
  }
  let max = 0
  for (const map of dp) {
    max = Math.max(max, ...Object.values(map))
  }
  return max
}
