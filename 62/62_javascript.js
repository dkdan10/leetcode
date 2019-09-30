/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// TABULATION
var uniquePaths = function (m, n) {
    const grid = Array(m).fill(Array(n).fill(1))
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            grid[i][j] = grid[i - 1][j] + grid[i][j - 1]
        }
    }
    return grid[m - 1][n - 1]
};

//  MEMOIZATION
const memo = {}
var uniquePaths = function (m, n) {
    const key1 = `${m}, ${n}`
    const key2 = `${n}, ${m}`
    if (memo[key1] !== undefined) return memo[key1]
    if (memo[key2] !== undefined) return memo[key2]
    if (m === 1 || n === 1) return 1
    memo[key1] = uniquePaths(m - 1, n) + uniquePaths(m, n - 1)
    memo[key2] = memo[key1]
    return memo[key1]
};
