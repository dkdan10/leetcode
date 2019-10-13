/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums) {
    if (nums.length === 0) return [[]]
    const el = nums[0]
    const permsWithoutEl = permute(nums.slice(1))
    const permsWithEl = []
    for (let i = 0; i < permsWithoutEl.length; i++) {
        const perm = permsWithoutEl[i]
        for (let j = 0; j < perm.length + 1; j++) {
            const before = perm.slice(0, j)
            const after = perm.slice(j)
            const newPerm = [...before, el, ...after]
            permsWithEl.push(newPerm)
        }
    }
    return permsWithEl
};