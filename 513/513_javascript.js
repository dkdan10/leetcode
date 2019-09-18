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

var findBottomLeftValue = function(root) {
    const q = [{node: root, depth: 0}]
    const deepLeft = {val: root.val, depth: 0}
    while (q.length) {
        const {node, depth} = q.shift()
        if (node.left) q.push({node: node.left, depth: depth + 1})
        if (node.right) q.push({node: node.right, depth: depth + 1})
        
        if (depth > deepLeft.depth) {
            deepLeft.depth = depth
            deepLeft.val = node.val
        }
    }
    return deepLeft.val
};