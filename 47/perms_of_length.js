/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums, n) {
    if (n > nums.length) return []
    if (nums.length === 0) return [[]]
    if (n === 0) return [[]]

    const el = nums[0]
    const shortPermsWoEl = permute(nums.slice(1), n - 1)
    const allPerms = []
    for (let i = 0; i < shortPermsWoEl.length; i++) {
        const perm = shortPermsWoEl[i]
        for (let j = 0; j < perm.length + 1; j++) {
            const before = perm.slice(0, j)
            const after = perm.slice(j)
            const newPerm = [...before, el, ...after]
            allPerms.push(newPerm)
        }
    }
    const permsWoEl = permute(nums.slice(1), n)
    allPerms.concat(permsWoEl)
    return allPerms
};

console.log(permute(["a", "b", "c"], 2))