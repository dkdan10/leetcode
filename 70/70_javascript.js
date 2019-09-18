/**
 * @param {number} n
 * @return {number}
 */

const memo = {0: 0, 1: 1, 2: 2}

var climbStairs = function(n) {
    if (memo[n]) return memo[n]
    if (!memo[n-1]) memo[n - 1] = climbStairs(n - 1)
    return memo [n-1] + memo[n-2]
};