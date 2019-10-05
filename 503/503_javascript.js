/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    const resArr = Array(nums.length)
    const stack = []
    for (let i = 2 * nums.length - 1; i >= 0; i--) {
        while (stack.length &&
            nums[stack[stack.length - 1]] <= nums[i % nums.length]) {
            stack.pop();
        }
        resArr[i % nums.length] = stack.length ? nums[stack[stack.length - 1]] : -1
        stack.push(i % nums.length)
    }
    return resArr
};