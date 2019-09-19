/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

//  TABULIZATION(MEMO)
var change = function(amount, coins) {
    const memo = new Array(amount + 1).fill(0);
    memo[0] = 1;
    
    for(const coin of coins){
        for(let i = coin; i < memo.length; i++){
            memo[i] += memo[i - coin];
        }
    }
    
    return memo[amount]
};

//  NOT MEMOIZED
var noMemoChange = function(amount, coins) {
    if (amount === 0) return 1
    if (!coins.length) return 0
    let numWays = 0
    while(amount > 0) {
        numWays += change(amount, coins.slice(1))
        amount -= coins[0]
    }
    if (amount === 0) numWays ++
    return numWays
};