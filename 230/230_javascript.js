/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

//  USING A STACK TO DO IT
var kthSmallest = function (root, k) {
    const stack = []
    while (true) {
        while (root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        k--
        if (!k) return root.val
        root = root.right
    }
};

// TURN TREE INTO ARRAY AND INDEX 
var kthSmallest = function (root, k) {
    const arrayConvert = (root) => {
        if (!root) return []
        return arrayConvert(root.left)
            .concat([root.val])
            .concat(arrayConvert(root.right))
    }
    return arrayConvert(root)[k - 1]
};


var kthSmallest = function (root, k) {
    let result = [];
    helper(root)
    return result[k - 1];

    function helper(node) {
        if (!node) return;
        if (result.length >= k) return;

        helper(node.left);
        if (result.length >= k) return;
        result.push(node.val);
        helper(node.right);
    }
};