/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var largestValues = function(root) {
    if (!root) return []
    const q = [{node: root, depth: 0}]
    const levels = []
    
    while(q.length) {
        const {node, depth} = q.shift()
        if (node.left) q.push({node: node.left, depth: depth + 1})
        if (node.right) q.push({node: node.right, depth: depth + 1})
        if (levels[depth] === undefined) {
            levels.push(node.val)
        } else if (node.val > levels[depth]) {
            levels[depth] = node.val
        }
    }
    return levels
};