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

// O(n) REFACTORED
// DUMMY NODE POINTER
var addTwoNumbers = function(l1, l2) {
    let carried = 0
    let dummyNode = new ListNode(0)
    let curr = dummyNode
    while (l1 || l2) {
        let x = l1 ? l1.val : 0
        let y = l2 ? l2.val : 0
        let newVal = x + y + carried
        carried = Math.floor(newVal / 10)
        curr.next = new ListNode(newVal % 10)
        curr = curr.next
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    if (carried) curr.next = new ListNode(carried)
    return dummyNode.next
};

// FIRST ATTEMPT 
var badAddTwoNumbers = function(l1, l2) {
    let carried = 0
    let values = []
    while (l1 && l2) {
        let newVal = l1.val + l2.val + carried
        carried = 0
        while (newVal > 9) {
            carried ++
            newVal = newVal - 10
        }
        l1 = l1.next
        l2 = l2.next
        values.push(newVal)
    }
    while (l1) {
        let newVal = l1.val + carried
        carried = 0
        while (newVal > 9) {
            carried ++
            newVal = newVal - 10
        }
        values.push(newVal)
        l1 = l1.next
    }
    while (l2) {
        let newVal = l2.val + carried
        carried = 0
        while (newVal > 9) {
            carried ++
            newVal = newVal - 10
        }
        values.push(newVal)
        l2 = l2.next
    }
    const head = new ListNode(values.shift())
    let prev = head
    while(values.length) {
        const curr = new ListNode(values.shift())
        prev.next = curr
        prev = curr
    }
    if (carried) prev.next = new ListNode(carried)
    return head
};