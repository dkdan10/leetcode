/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

 
var allPathsSourceTarget = function(graph) {
    const target = graph.length - 1
    
    const solve = (node) => {
        if (node === target) return [[target]]
        const ans = []
        for (let neib = 0; neib < graph[node].length; neib++) {
            const nextNeib = solve(graph[node][neib])
            for (let i = 0; i < nextNeib.length; i++) {
                ans.push([node].concat(nextNeib[i]))
            }
        }
        return ans
    }
    return solve(0)
};