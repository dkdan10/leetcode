/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */


//  DFS poor
var combine = function (n, k) {
    let result = [];

    function dfs(current, start) {
        if (current.length == k) {
            result.push(current);
            return;
        }
        if (current.length > k) {
            return;
        }

        for (let i = start; i <= n; i++) {
            dfs(current.concat(i), i + 1);
        }

    }

    dfs([], 1);
    return result;
};