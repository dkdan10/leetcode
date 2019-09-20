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

//  ITERATIVELY
var inorderTraversal = function(root) {
    const stack = []
    const resultArr = []

    while (stack.length || root) {
        if (root) {
            stack.push(root)
            root = root.left
        } else {
            const node = stack.pop()
            resultArr.push(node.val)
            root = node.right
        }
    }
        
    return resultArr
};

//  RECURSIVE
var inorderTraversal = function(root) {
    if (root === null) return []
    return inorderTraversal(root.left).concat(root.val).concat(inorderTraversal(root.right))
};