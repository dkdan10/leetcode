/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

var reverseBetween = function (head, m, n) {
    let dummyHead = new ListNode(null)
    if (m === n) return head
    let node = head
    let startChain = null
    while (m > 1) {
        startChain = node
        node = node.next
        m--
        n--
    }
    let firstReversed = node
    while (n > 0) {
        const next = node.next
        node.next = dummyHead.next
        dummyHead.next = node
        node = next
        n--
    }

    firstReversed.next = node
    if (startChain) {
        startChain.next = dummyHead.next
        return head
    }

    return dummyHead.next
};