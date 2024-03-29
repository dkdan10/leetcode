/**
 * @param {number} n
 * @return {number[][]}
 */

var generateMatrix = function (n) {
    if (n === 0) return [[]]; //important...used to be [] and took forever to figure out
    if (n === 1) return [[1]];

    let rowBegin = 0,
        colBegin = 0,
        rowEnd = n - 1,
        colEnd = n - 1;
    const result = new Array(n).fill(0).map(() => new Array(n).fill(0));

    let num = 1;
    while (num <= n * n) {
        //in through spiral
        for (let i = colBegin; i <= colEnd; i++) {
            result[rowBegin][i] = num;
            num++;
        }
        rowBegin++;

        //move down
        for (let j = rowBegin; j <= rowEnd; j++) {
            result[j][colEnd] = num;
            num++;
        }
        colEnd--;

        for (let i = colEnd; i >= colBegin; i--) {
            result[rowEnd][i] = num;
            num++;
        }
        rowEnd--;

        for (let j = rowEnd; j >= rowBegin; j--) {
            result[j][colBegin] = num;
            num++;
        }
        colBegin++;
    }

    return result;
};