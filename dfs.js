// dfs.js

function dfs(graph, start, visited = new Set()) {
  visited.add(start);
  console.log(start);
  for (const neighbor of graph[start] || []) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}

// Пример графа
const edges = [
  [4, 2],
  [1, 3],
  [2, 4]
];

const graph = {};

// Построение списка смежности
for (const [u, v] of edges) {
  if (!graph[u]) graph[u] = [];
  if (!graph[v]) graph[v] = [];
  graph[u].push(v);
  graph[v].push(u);
}

// Запуск DFS
dfs(graph, 1);
