/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
    let largestSum = -Infinity
    let currentSum = 0
    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i]
        if (currentSum > largestSum) largestSum = currentSum
        if (currentSum < 0) currentSum = 0
    }
    return largestSum
};