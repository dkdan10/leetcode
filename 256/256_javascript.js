/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */

var binaryTreePaths = function(root) {
    if (root === null) return []
    if (root.left === null && root.right === null) return [`${root.val}`]
    
    const allBranches = binaryTreePaths(root.left).concat(binaryTreePaths(root.right))
    
    return allBranches.map((el) =>`${root.val}->${el}`)
};