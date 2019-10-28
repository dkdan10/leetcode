/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */

//  70% 90 ms.
var findMinHeightTrees = function (n, edges) {
    if (n === 1) return [0]
    const graph = {}
    for (let i = 0; i < edges.length; i++) {
        const currentEdge = edges[i]
        if (graph[currentEdge[0]] === undefined) graph[currentEdge[0]] = new Set()
        if (graph[currentEdge[1]] === undefined) graph[currentEdge[1]] = new Set()
        graph[currentEdge[0]].add(currentEdge[1])
        graph[currentEdge[1]].add(currentEdge[0])
    }
    let frontier = oneEdgeNodes(graph)
    while (n > 2) {
        const nextFront = []
        frontier.forEach(node => {
            const connections = graph[node]
            delete graph[node]
            n--
            connections.forEach(connectedNode => {
                graph[connectedNode].delete(parseInt(node))
                if (graph[connectedNode].size < 2) {
                    nextFront.push(connectedNode)
                }
            })
        })
        frontier = nextFront
    }
    return Object.keys(graph)
};

const oneEdgeNodes = function (graph) {
    return Object.keys(graph).filter(key => graph[key].size < 2)
}

// A little bit better now with refactor
var findMinHeightTrees = function (n, edges) {
    if (n === 1) return [0]
    const graph = {}
    for (let i = 0; i < edges.length; i++) {
        const currentEdge = edges[i]
        if (graph[currentEdge[0]] === undefined) graph[currentEdge[0]] = new Set()
        if (graph[currentEdge[1]] === undefined) graph[currentEdge[1]] = new Set()
        graph[currentEdge[0]].add(currentEdge[1])
        graph[currentEdge[1]].add(currentEdge[0])
    }

    while (n > 2) {
        const frontier = oneEdgeNodes(graph)
        frontier.forEach(node => {
            const connections = graph[node]
            delete graph[node]
            n--
            connections.forEach(connectedNode => {
                graph[connectedNode].delete(parseInt(node))
            })
        })
    }
    return Object.keys(graph)
};

const oneEdgeNodes = function (graph) {
    return Object.keys(graph).filter(key => graph[key].size < 2)
}

//  TIME LIMIT EXCEEDED
var findMinHeightTrees = function (n, edges) {
    if (n === 1) return [0]
    const graph = {}
    for (let i = 0; i < edges.length; i++) {
        const currentEdge = edges[i]
        if (graph[currentEdge[0]] === undefined) graph[currentEdge[0]] = new Set()
        if (graph[currentEdge[1]] === undefined) graph[currentEdge[1]] = new Set()
        graph[currentEdge[0]].add(currentEdge[1])
        graph[currentEdge[1]].add(currentEdge[0])
    }
    treeHeights = {}
    Object.keys(graph).forEach(node => {
        treeHeights[node] = calcHeight(graph, parseInt(node), new Set())
    })

    const smallestTree = Math.min(...Object.values(treeHeights))
    return Object.keys(treeHeights).filter(key => treeHeights[key] === smallestTree)
};

const calcHeight = function (graph, root, visited) {
    if (visited.has(root)) return null
    if (root === undefined) return -1

    const ways = []
    visited.add(root)
    graph[root].forEach(node => {
        const child_height = calcHeight(graph, node, visited)
        if (child_height !== null) ways.push(child_height)
    })
    return ways.length ? 1 + Math.max(...ways) : 0
}