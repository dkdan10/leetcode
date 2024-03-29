/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 
var mergeTwoLists = function (l1, l2) {
    const mainHead = new ListNode(null)
    let current = mainHead

    while (l1 && l2) {
        if (l1.val >= l2.val) {
            current.next = l2
            l2 = l2.next
        } else {
            current.next = l1
            l1 = l1.next
        }
        current = current.next
    }
    if (l1) current.next = l1
    if (l2) current.next = l2
    return mainHead.next
};