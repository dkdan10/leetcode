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
var reverseList = function(head) {
    if (head === null) return head
    
    let prev = null
    let curr = head
    
    while (curr.next) {
        const nextNode = curr.next
        curr.next = prev
        prev = curr
        curr = nextNode
    }
    curr.next = prev
    return curr
    
};