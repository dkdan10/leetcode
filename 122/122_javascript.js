/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    let i = 1
    let profit = 0
    while (i < prices.length) {
        if (prices[i - 1] < prices[i]) {
            profit = profit + (prices[i] - prices[i - 1])
        }
        i++
    }
    return profit
};