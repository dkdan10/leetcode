/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */


// NAIVE APPROACH
var findMedianSortedArrays = function(nums1, nums2) {
    const allNumsSorted = nums1.concat(nums2).sort((a, b) => a - b)
    const middle = Math.floor(allNumsSorted.length / 2)
    if (allNumsSorted.length % 2 === 0) {
        return (allNumsSorted[middle - 1] + allNumsSorted[middle]) / 2
    } else {
        return allNumsSorted[middle]
    }
};