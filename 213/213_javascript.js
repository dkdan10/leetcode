/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 1) return nums[0]
    return Math.max(_rob(nums.slice(1)), _rob(nums.slice(0, nums.length - 1)))
};

var _rob = function (nums) {
    const dp = Array(nums.length + 2).fill(0)
    for (let i = 2; i < dp.length; i++) {
        const withoutCurr = dp[i - 1]
        const withCurr = nums[i - 2] + dp[i - 2]
        dp[i] = Math.max(withoutCurr, withCurr)
    }
    return dp[dp.length - 1]
};