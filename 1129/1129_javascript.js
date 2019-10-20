/**
 * @param {number} n
 * @param {number[][]} red_edges
 * @param {number[][]} blue_edges
 * @return {number[]}
 */


//  FIRST TRY
var shortestAlternatingPaths = function (n, red_edges, blue_edges) {
    redGraph = {}
    blueGraph = {}
    for (let i = 0; i < red_edges.length; i++) {
        const redEdge = red_edges[i]
        if (redGraph[redEdge[0]] === undefined) redGraph[redEdge[0]] = []
        redGraph[redEdge[0]].push(redEdge[1])
    }
    for (let i = 0; i < blue_edges.length; i++) {
        const blueEdge = blue_edges[i]
        if (blueGraph[blueEdge[0]] === undefined) blueGraph[blueEdge[0]] = []
        blueGraph[blueEdge[0]].push(blueEdge[1])
    }
    const resultArray = []
    for (let target = 0; target < n; target++) {
        const redVisted = new Set()
        const blueVisted = new Set()
        let queue = [{ node: 0, steps: 0, color: "red" }, { node: 0, steps: 0, color: "blue" }]
        while (queue.length) {
            const { node, steps, color } = queue.shift()
            if (node === target) {
                resultArray[target] = steps
                break;
            }
            if (color === "red") {
                if (redGraph[node]) {
                    redGraph[node].forEach(nextNode => {
                        if (!redVisted.has(nextNode)) {
                            queue.push({ node: nextNode, steps: steps + 1, color: "blue" })
                            redVisted.add(nextNode)
                        }
                    })
                }
            } else {
                if (blueGraph[node]) {
                    blueGraph[node].forEach(nextNode => {
                        if (!blueVisted.has(nextNode)) {
                            queue.push({ node: nextNode, steps: steps + 1, color: "red" })
                            blueVisted.add(nextNode)
                        }
                    })
                }
            }
        }
        if (resultArray[target] === undefined) resultArray[target] = -1
    }
    return resultArray
};