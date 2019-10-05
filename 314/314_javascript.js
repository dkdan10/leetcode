/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function (root) {
    if (!root) return []
    const nodeLevels = {}
    const queue = [{ node: root, dist: 0 }]
    let low = 0
    let high = 0
    while (queue.length) {
        const { node, dist } = queue.shift()
        if (node.left) queue.push({ node: node.left, dist: dist - 1 })
        if (node.right) queue.push({ node: node.right, dist: dist + 1 })
        if (!nodeLevels[dist]) nodeLevels[dist] = []
        nodeLevels[dist].push(node.val)

        if (low > dist) low = dist
        if (high < dist) high = dist
    }

    const returnArr = []
    for (let i = low; i <= high; i++) {
        returnArr.push(nodeLevels[i])
    }
    return returnArr
};