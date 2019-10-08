class MinHeap {
    constructor () {
        this.arrNodes = [null]
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
        if (this.arrNodes[parentNodeIdx] > this.arrNodes[nodeIdx]) {
            [this.arrNodes[parentNodeIdx], this.arrNodes[nodeIdx]] = [this.arrNodes[nodeIdx], this.arrNodes[parentNodeIdx]]
            this.siftUp(parentNodeIdx)
        }
    }

    insert(val) {
        this.arrNodes.push(val)
        this.siftUp(this.arrNodes.length - 1)
    }

    deleteMin() {
        if (this.arrNodes.length === 1) return null
        if (this.arrNodes.length === 2) return this.arrNodes.pop()

        const min = this.arrNodes[1]
        this.arrNodes[1] = this.arrNodes.pop()
        this.siftDown(1)
        return min
    }

    siftDown(parentNodeIdx) {
        const leftNodeIdx = this.getLeftChildIdx(parentNodeIdx)
        const rightNodeIdx = this.getRightChildIdx(parentNodeIdx)
        if (this.arrNodes[leftNodeIdx] < this.arrNodes[parentNodeIdx] && ( !this.arrNodes[rightNodeIdx] || this.arrNodes[leftNodeIdx] < this.arrNodes[rightNodeIdx]) ) {
            [this.arrNodes[parentNodeIdx], this.arrNodes[leftNodeIdx]] = [this.arrNodes[leftNodeIdx], this.arrNodes[parentNodeIdx]]
            this.siftDown(leftNodeIdx)
        } else if (this.arrNodes[rightNodeIdx] < this.arrNodes[parentNodeIdx]) {
            [this.arrNodes[parentNodeIdx], this.arrNodes[rightNodeIdx]] = [this.arrNodes[rightNodeIdx], this.arrNodes[parentNodeIdx]]
            this.siftDown(rightNodeIdx)
        }
    }

}

const minHeap = new MinHeap()
minHeap.insert(1)
minHeap.insert(2)
minHeap.insert(10)
minHeap.insert(23)
minHeap.insert(4)
minHeap.insert(5)
minHeap.insert(234)
minHeap.insert(7)
minHeap.insert(8)
minHeap.insert(9)
console.log(minHeap.deleteMin())
console.log(minHeap.deleteMin())
console.log(minHeap.deleteMin())
console.log(minHeap.deleteMin())
console.log(minHeap.deleteMin())
console.log(minHeap.deleteMin())
console.log(minHeap.deleteMin())
console.log(minHeap)
console.log(minHeap.deleteMin())
console.log(minHeap)
console.log(minHeap.deleteMin())
console.log(minHeap)
