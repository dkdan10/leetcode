/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (!root) return null
    const stack = [root]

    let prev = null
    while (stack.length) {
        const node = stack.pop()
        if (node.right) stack.push(node.right)
        if (node.left) stack.push(node.left)
        if (prev) prev.right = node
        node.left = null
        node.right = null
        prev = node
    }
    return root
};