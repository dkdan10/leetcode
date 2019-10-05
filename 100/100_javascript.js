/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSameTree = function (p, q) {
    if (!p && !q) return true
    if ((p && !q) || (q && !p)) return false

    const queue = [{ pNode: p, qNode: q }]
    while (queue.length) {
        const { pNode, qNode } = queue.shift()
        if (pNode.val !== qNode.val) return false

        if ((pNode.left && !qNode.left) || !pNode.left && qNode.left) {
            return false
        } else if (pNode.left && qNode.left) {
            queue.push({ pNode: pNode.left, qNode: qNode.left })
        }

        if ((pNode.right && !qNode.right) || !pNode.right && qNode.right) {
            return false
        } else if (pNode.right && qNode.right) {
            queue.push({ pNode: pNode.right, qNode: qNode.right })
        }

    }
    return true
};