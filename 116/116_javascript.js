/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */

var connect = function (root) {
    if (!root) return root
    const q = [{ node: root, depth: 0 }]
    const pointerObj = {}
    while (q.length) {
        const { node, depth } = q.shift()
        if (node.left) q.push({ node: node.left, depth: depth + 1 })
        if (node.right) q.push({ node: node.right, depth: depth + 1 })
        if (!pointerObj[depth]) {
            pointerObj[depth] = node
            node.next = null
        } else {
            const lastNode = pointerObj[depth]
            lastNode.next = node
            node.next = null
            pointerObj[depth] = node
        }
    }
    return root
};