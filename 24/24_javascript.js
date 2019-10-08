/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swapPairs = function (head) {
    let prev = head
    while (prev && prev.next) {
        const swappedFirst = prev.next
        let tempNext;
        if (swappedFirst.next && swappedFirst.next.next) {
            tempNext = swappedFirst.next
            prev.next = swappedFirst.next.next
        } else {
            prev.next = swappedFirst.next
        }
        swappedFirst.next = prev
        if (swappedFirst.next === head) head = swappedFirst
        prev = tempNext
    }
    return head
};