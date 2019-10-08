/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    const nodeHeap = new MinHeap()

    lists.forEach(node => {
        while (node) {
            nodeHeap.insert(node)
            node = node.next
        }
    })

    const dummyHead = new ListNode(null)
    dummyHead.next = nodeHeap.deleteMin()
    let prev = dummyHead.next
    while (nodeHeap.size > 0) {
        const nextNode = nodeHeap.deleteMin()
        nextNode.next = null
        prev.next = nextNode
        prev = nextNode
    }
    return dummyHead.next
};

class MinHeap {
    constructor() {
        this.arrNodes = [null]
        this.size = 0
    }

    getParentIdx(nodeIdx) {
        return Math.floor(nodeIdx / 2)
    }

    getLeftChildIdx(nodeIdx) {
        return nodeIdx * 2
    }

    getRightChildIdx(nodeIdx) {
        return (nodeIdx * 2) + 1
    }

    siftUp(nodeIdx) {
        if (nodeIdx === 1) return
        const parentNodeIdx = this.getParentIdx(nodeIdx)
        if (this.arrNodes[parentNodeIdx].val > this.arrNodes[nodeIdx].val) {
            [this.arrNodes[parentNodeIdx], this.arrNodes[nodeIdx]] = [this.arrNodes[nodeIdx], this.arrNodes[parentNodeIdx]]
            this.siftUp(parentNodeIdx)
        }
    }

    insert(val) {
        this.arrNodes.push(val)
        this.siftUp(this.arrNodes.length - 1)
        this.size++
    }

    deleteMin() {
        if (this.arrNodes.length === 1) return null
        this.size--
        if (this.arrNodes.length === 2) return this.arrNodes.pop()

        const min = this.arrNodes[1]
        this.arrNodes[1] = this.arrNodes.pop()
        this.siftDown(1)
        return min
    }

    siftDown(parentNodeIdx) {
        const leftNodeIdx = this.getLeftChildIdx(parentNodeIdx)
        const rightNodeIdx = this.getRightChildIdx(parentNodeIdx)
        if (this.arrNodes[leftNodeIdx] &&
            this.arrNodes[leftNodeIdx].val < this.arrNodes[parentNodeIdx].val
            && (!this.arrNodes[rightNodeIdx] ||
                this.arrNodes[leftNodeIdx].val < this.arrNodes[rightNodeIdx].val)) {
            [this.arrNodes[parentNodeIdx], this.arrNodes[leftNodeIdx]] = [this.arrNodes[leftNodeIdx], this.arrNodes[parentNodeIdx]]
            this.siftDown(leftNodeIdx)
        } else if (this.arrNodes[rightNodeIdx] &&
            this.arrNodes[rightNodeIdx].val < this.arrNodes[parentNodeIdx].val) {
            [this.arrNodes[parentNodeIdx], this.arrNodes[rightNodeIdx]] = [this.arrNodes[rightNodeIdx], this.arrNodes[parentNodeIdx]]
            this.siftDown(rightNodeIdx)
        }
    }

}