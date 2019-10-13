/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permuteUnique = function (nums) {
    if (nums.length === 0) return [[]]
    const el = nums[0]
    const permsWithoutEl = permuteUnique(nums.slice(1))
    const permsWithEl = {}
    for (let i = 0; i < permsWithoutEl.length; i++) {
        const perm = permsWithoutEl[i]
        for (let j = 0; j < perm.length + 1; j++) {
            const before = perm.slice(0, j)
            const after = perm.slice(j)
            const newPerm = [...before, el, ...after]
            const key = newPerm.join(",")
            if (permsWithEl[key] === undefined) permsWithEl[key] = newPerm
        }
    }
    return Object.values(permsWithEl)
};