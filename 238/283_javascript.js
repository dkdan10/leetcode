/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const output = Array(nums).fill(1)
    for (let i = 1; i < nums.length; i++) {
        output[i] = output[i - 1] * nums[i - 1]
    }

    let reverseProduct = 1
    for (let i = nums.length - 2; i >= 0; i--) {
        reverseProduct *= nums[i + 1]
        output[i] *= reverseProduct
    }
    return output
};