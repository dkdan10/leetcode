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

// RECURSIVE MEMO(ED)
var change = function (amount, coins, memo = {}) {
    const key = amount + '-' + coins;
    if (key in memo) return memo[key];
    if (amount === 0) return 1;
  ​
    let totalWays = 0;
    const currentCoin = coins[coins.length - 1];
    for (let qty = 0, value = qty * currentCoin; value <= amount; qty += 1, value += currentCoin) {
      totalWays += change(amount - value, coins.slice(0, -1), memo);
    }
  ​
    memo[key] = totalWays;
    return memo[key];
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