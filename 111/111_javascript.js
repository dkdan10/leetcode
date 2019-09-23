/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// BREATH FIRST FIRST!
var minDepth = function(root) {
    if (!root) return 0
    const q = [{node: root, depth: 1}]
    let minDepth = null
    while (q.length) {
        const {node, depth} = q.shift()
        if (node && (node.left || node.right)) {
            if (node.left) q.push({node: node.left, depth: depth + 1})
            if (node.right) q.push({node: node.right, depth: depth + 1})
        } else if (minDepth === null || minDepth > depth) {
            minDepth = depth
        }
    }
    return minDepth
};