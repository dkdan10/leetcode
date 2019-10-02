/**
 * @param {number} capacity
 */
var Node = function (val, prev = null, next = null) {
    this.val = val
    this.key = null
    this.prev = prev
    this.next = next
}

var LRUCache = function (capacity) {
    this.head = new Node(null)
    this.tail = new Node(null, this.head)
    this.head.next = this.tail

    this.dict = {}
    this.cap = capacity
    this.size = 0
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    const node = this.dict[key]
    if (!node) return -1
    this.removeNode(node)
    this.connectNodeToHead(node)
    return this.dict[key].val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    let node;
    if (this.dict[key]) {
        node = this.dict[key]
        node.val = value
        this.removeNode(node)
    } else {
        node = new Node(value)
        node.key = key
        this.size++;
    }
    this.dict[key] = node
    this.connectNodeToHead(node)
    if (this.size > this.cap) {
        this.removeFromTail()
    }
};

LRUCache.prototype.removeFromTail = function () {
    const deleteNode = this.tail.prev
    delete this.dict[deleteNode.key]
    this.tail.prev = deleteNode.prev
    deleteNode.prev.next = this.tail
    this.size--
}

LRUCache.prototype.removeNode = function (node) {
    node.next.prev = node.prev
    node.prev.next = node.next
}

LRUCache.prototype.connectNodeToHead = function (node) {
    this.head.next.prev = node
    node.next = this.head.next
    this.head.next = node
    node.prev = this.head
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */