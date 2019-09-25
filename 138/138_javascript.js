/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */

//  WITH FACTORED OUT DUPLICATION METHOD
var copyRandomList = function (head) {
    if (!head) return head
    const newHead = new Node(head.val)
    const old2New = { [head.val]: newHead }
    const q = [head]
    while (q.length) {
        const node = q.shift()
        let dupedNode = dupeNode(node, old2New)
        if (node.next) {
            dupedNode.next = dupeNode(node.next, old2New)
            q.push(node.next)
        }
        if (node.random) {
            dupedNode.random = dupeNode(node.random, old2New)
        }
    }
    return newHead
};

const dupeNode = (node, dictionary) => {
    if (dictionary[node.val]) {
        return dictionary[node.val]
    } else {
        const coppiedNode = new Node(node.val)
        dictionary[coppiedNode.val] = coppiedNode
        return coppiedNode
    }
}


//  FIRST
var copyRandomList = function (head) {
    if (!head) return head
    const newHead = new Node(head.val)
    const old2New = { [head.val]: newHead }
    const q = [head]
    while (q.length) {
        const node = q.shift()
        let dupedNode;
        if (old2New[node.val]) {
            dupedNode = old2New[node.val]
        } else {
            dupedNode = new Node(node.val)
            old2New[node.val] = dupedNode
        }

        if (node.next) {
            if (old2New[node.next.val]) {
                dupedNode.next = old2New[node.next.val]
            } else {
                dupedNode.next = new Node(node.next.val)
                old2New[node.next.val] = dupedNode.next
            }
            q.push(node.next)
        }
        if (node.random) {
            if (old2New[node.random.val]) {
                dupedNode.random = old2New[node.random.val]
            } else {
                dupedNode.random = new Node(node.random.val)
                old2New[node.random.val] = dupedNode.random
            }
        }
    }
    return newHead
};