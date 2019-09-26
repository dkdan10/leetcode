/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//  A little less naive with binary search. O(2log(n)) => log(n)
var searchRange = function (nums, target) {
    const result = [-1, -1]
    if (!nums.length) return result
    if (nums.length === 1) return nums[0] === target ? [0, 0] : result
    let low = 0
    let high = nums.length - 1
    let mid = Math.floor(high / 2)
    while (result[0] === -1) {
        if (nums[mid] < target) {
            low = mid + 1
        } else if (nums[mid] >= target) {
            high = mid
        }
        if (low === high) {
            if (nums[low] !== target) return result
            result[0] = low
        }
        mid = Math.floor((high - low) / 2) + low
    }
    low = 0
    high = nums.length - 1
    mid = Math.floor(high / 2)
    while (result[1] === -1) {
        if (nums[mid] <= target) {
            low = mid + 1
        } else if (nums[mid] > target) {
            high = mid
        }
        if (low === high) {
            result[1] = (nums[low] === target) ? low : low - 1
        }
        mid = Math.floor((high - low) / 2) + low
    }
    return result
};

//  NAIVE FIRST... NOT O(log(N))
var searchRange = function (nums, target) {
    let first = -1
    let last = -1
    for (let i = 0; i < nums.length; i++) {
        if (first === -1 && nums[i] === target) {
            first = last = i
            while (nums[i + 1] === target) {
                i++
                last = i
            }
        }
    }
    return [first, last]
};