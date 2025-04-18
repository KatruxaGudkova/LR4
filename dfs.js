// dfs.js
// Обход графа в глубину (DFS)
function dfs(graph, start, visited = new Set()) {
  visited.add(start);
  console.log(start);
  for (const neighbor of graph[start] || []) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}

// Поиск длины пути между двумя вершинами с обработкой ошибок
function dfsPathLength(graph, start, end) {
  // Проверка: обе вершины должны быть в графе
  if (!(start in graph) || !(end in graph)) {
    throw new Error(`Одна или обе вершины (${start}, ${end}) отсутствуют в графе или некорректны`);
  }

  const stack = [[start, 0]];
  const visited = new Set();

  while (stack.length > 0) {
    const [node, length] = stack.pop();

    if (node === end) return length;

    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbor of graph[node] || []) {
        stack.push([neighbor, length + 1]);
      }
    }
  }

  return -1; // путь не найден
}


// Пример графаааааааааааа
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

// Проверка длины пути
const startNode = 2;
const endNode = 999;
// console.log(`Длина пути от ${startNode} до ${endNode}: ${dfsPathLength(graph, startNode, endNode)}`);

try {
  const length = dfsPathLength(graph, startNode, endNode);
  console.log(`Длина пути от ${startNode} до ${endNode}: ${length}`);
} catch (error) {
  console.error("Ошибка:", error.message);
}

// Запуск DFS
dfs(graph, 1);
