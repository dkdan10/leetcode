 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

// BEST
var insertIntoBST = function(root, val) {
    if (!root) return new TreeNode(val)
    
    if (root.val > val) {
        root.left = insertIntoBST(root.left, val)
    } else {
        root.right = insertIntoBST(root.right, val)
    }
    
    return root
};

// FIRST ATTEMPT
var firstInsertIntoBST = function(root, val) {
    let node = root
    while (true) {
        if (node.val < val) {
            if (node.right) {
                node = node.right
            } else {
                node.right = new TreeNode(val)
                return root
            }
        } else {
            if (node.left) {
                node = node.left
            } else {
                node.left = new TreeNode(val)
                return root
            }
        }
    }
};