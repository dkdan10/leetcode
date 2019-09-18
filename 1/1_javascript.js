/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 // O(n)
var twoSum = function(nums, target) {
    const numIndexRef = {}
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]
        if (numIndexRef[complement] !== undefined) return [numIndexRef[complement], i]
        numIndexRef[nums[i]] = i
    }
    return [0]
};

//  O(n^2)
var badtwoSum = function(nums, target) {
    for (let i = 0; i < nums.length -1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j]
        }
    }
};

