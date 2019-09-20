/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// BEST SOLUTION
var buildTree = function(preorder, inorder) {
    //     FOR O(n) work for O(1) lookup
    const inorderLookup = {}
    inorder.forEach((el,i) => inorderLookup[el] = i)
    
    function helper(p1, p2, i1, i2) {
    if (p1 > p2 || i1 > i2) return null; // sanity check

        var value = preorder[p1],           // get the root value
            index = inorderLookup[value], // get inorder position
            nLeft = index - i1,             // count nodes in left subtree
            root  = new TreeNode(value);    // build the root node

        // build the left and right subtrees recursively
        root.left  = helper(p1 + 1, p1 + nLeft, i1, index - 1);
        root.right = helper(p1 + nLeft + 1, p2, index + 1, i2);

        return root;
    }

    return helper(0, preorder.length - 1, 0, inorder.length - 1);

};

// SHORT, BETTER SOLUTION
var buildTree = function(preorder, inorder) {
    if (inorder.length) {
        const idx = inorder.indexOf(preorder.shift())
        const root = new TreeNode(inorder[idx])
        root.left = buildTree(preorder, inorder.slice(0, idx))
        root.right = buildTree(preorder, inorder.slice(idx + 1))
        return root
    }
    return null
};

//  NAIVE n^4
var naiveBuildTree = function(preorder, inorder) {
    if (!preorder.lenth && !inorder.length) return null
    const root = new TreeNode(preorder[0])
    const rootIdx = inorder.indexOf(root.val)
    const leftInorder = inorder.slice(0, rootIdx)
    const rightInorder = inorder.slice(rootIdx + 1)
    const leftPreorder = []
    const rightPreorder = []
    for (let i = 0; i < preorder.length; i++) {
        const el = preorder[i]
        if (leftInorder.indexOf(el) !== -1) {
            leftPreorder.push(el)
        } else if (rightInorder.indexOf(el) !== -1) {
            rightPreorder.push(el)
        }
    }
    root.left = buildTree(leftPreorder, leftInorder)
    root.right = buildTree(rightPreorder, rightInorder)
    return root
};