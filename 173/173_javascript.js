/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */

// BETTER ITTERATION
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
    this.generator = dfsGenerator(root)
    this.root = root
    this.nextSmall = this.generator.next().value
};

function* dfsGenerator(root) {
    if (root === null) return
    const stack = []
    let current = root

    while (true) {
        if (current) {
            stack.push(current)
            current = current.left
        } else if (stack.length) {
            const top = stack.pop()
            yield top.val
            current = top.right
        } else {
            break
        }
    }
}

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    const smallReturn = this.nextSmall
    this.nextSmall = this.generator.next().value
    return smallReturn
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return this.nextSmall !== undefined ? true : false
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */




//  
// ITTERATE WAY>>
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
    this.stack = [root]
    this.generator = dfsGenerator(this.stack)
    this.root = root
    this.nextSmall = this.generator.next().value
};

function* dfsGenerator(stack) {
    const visited = {}
    while (stack.length) {
        if (stack[stack.length - 1] === null) return
        while (stack[stack.length - 1].left &&
            !stack[stack.length - 1].left.visited) {

            stack.push(stack[stack.length - 1].left)
        }

        top = stack.pop()
        yield top.val
        top.visited = true

        if (top.right) {
            stack.push(top.right)
        }
    }
}

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    const smallReturn = this.nextSmall
    this.nextSmall = this.generator.next().value
    return smallReturn
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return this.nextSmall !== undefined ? true : false
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */


//  SLOW WAY>>>
var BSTIterator = function (root) {
    this.smallArr = []
    this.smallI = 0
    this.root = root
    this.fillSmallArr(root)
};

BSTIterator.prototype.fillSmallArr = function (node) {
    if (!node) return
    this.fillSmallArr(node.left)
    this.smallArr.push(node.val)
    this.fillSmallArr(node.right)
}

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    this.smallI++
    return this.smallArr[this.smallI - 1]
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return this.smallI < this.smallArr.length
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */