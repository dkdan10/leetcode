/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

var uniquePathsWithObstacles = function (obstacleGrid) {
    if (obstacleGrid[0][0] === 1) return 0
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    const grid = Array.from({ length: m },
        () => Array(n).fill(0))
    grid[0][0] = 1
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j]) continue
            if (i > 0) grid[i][j] += grid[i - 1][j]
            if (j > 0) grid[i][j] += grid[i][j - 1]
        }
    }
    return grid[m - 1][n - 1]
};