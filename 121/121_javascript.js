/**
 * @param {number[]} prices
 * @return {number}
 */

//  BETTER ANS

var maxProfit = function (prices) {
    let minBefore = Infinity
    let maxProfit = 0
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minBefore) {
            minBefore = prices[i]
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minBefore)
        }
    }
    return maxProfit
};

//  INITIAL ANS
var maxProfit = function (prices) {
    const minBefore = [Infinity]
    for (let i = 1; i < prices.length; i++) {
        minBefore.push(Math.min(minBefore[i - 1], prices[i - 1]))
    }
    let max = 0
    for (let i = 1; i < prices.length; i++) {
        max = Math.max(max, prices[i] - minBefore[i])
    }
    return max
};