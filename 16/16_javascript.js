/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    if (nums.length < 3) {
        return null;
    }
    nums = nums.sort(function (a, b) {
        return a - b;
    });
    let smallDif = { dif: null, val: null }
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1, k = nums.length - 1; j < k;) {
            const targetDif = (target - (nums[i] + nums[j] + nums[k]))
            if (smallDif.dif === null || Math.abs(targetDif) < smallDif.dif) {
                smallDif = { dif: Math.abs(targetDif), val: nums[i] + nums[j] + nums[k] }
            }
            if (targetDif < 0) {
                k--;
            } else {
                j++;
            }
        }
    }
    return smallDif.val;
};