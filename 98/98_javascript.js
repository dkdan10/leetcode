/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// ITERATIVELY
var isValidBST = function (root) {
    if (root === null) return true
    const stack = [{ node: root, max: Infinity, min: -Infinity }]
    while (stack.length) {
        const { node, max, min } = stack.shift()
        if (node) {
            if (node.val <= min) return false
            if (node.val >= max) return false
            stack.push({ node: node.left, max: node.val, min: min })
            stack.push({ node: node.right, max: max, min: node.val })
        }
    }
    return true
};

//  RECURSIVELY
var isValidBST = function (root) {
    const isValidRoot = (root, min, max) => {
        if (root === null) return true
        if (!root.left && !root.right) {
            if (root.val > min && root.val < max) {
                return true
            } else {
                return false
            }
        }
        if (root.left) {
            if (!isValidRoot(root.left, min, root.val) || !(root.val > root.left.val)) {
                return false
            }
        }
        if (root.right) {
            if (!isValidRoot(root.right, root.val, max) || !(root.val < root.right.val)) {
                return false
            }
        }

        return true
    }
    return isValidRoot(root, -Infinity, Infinity)
};