/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const memo = {}
    
    var countCoins = function (remaining) {
        if (remaining < 0) return Infinity
        if (remaining === 0) return 0
        if (memo[`${remaining}`] !== undefined) return memo[`${remaining}`]
        let result = Infinity

        for (let i = 0; i < coins.length; i++) {
            const nextStep = countCoins(remaining - coins[i])
            if (nextStep !== Infinity) {
                result = Math.min(nextStep + 1, result)
            }
        }
        memo[`${remaining}`] = result
        return result
    }

    const returnVal = countCoins(amount)
    return returnVal === Infinity ? -1 : returnVal
};