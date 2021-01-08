/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 *
 * https://leetcode-cn.com/problems/design-linked-list/description/
 *
 * algorithms
 * Medium (23.03%)
 * Likes:    102
 * Dislikes: 0
 * Total Accepted:    12.6K
 * Total Submissions: 54.3K
 * Testcase Example:  '["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]\r\n[[],[1],[3],[1,2],[1],[1],[1]]\r'
 *
 * 设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：val 和 next。val 是当前节点的值，next
 * 是指向下一个节点的指针/引用。如果要使用双向链表，则还需要一个属性 prev 以指示链表中的上一个节点。假设链表中的所有节点都是 0-index 的。
 *
 * 在链表类中实现这些功能：
 *
 *
 * get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
 * addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
 * addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
 * addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index
 * 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
 * deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。
 *
 *
 *
 *
 * 示例：
 *
 * MyLinkedList linkedList = new MyLinkedList();
 * linkedList.addAtHead(1);
 * linkedList.addAtTail(3);
 * linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
 * linkedList.get(1);            //返回2
 * linkedList.deleteAtIndex(1);  //现在链表是1-> 3
 * linkedList.get(1);            //返回3
 *
 *
 *
 *
 * 提示：
 *
 *
 * 所有val值都在 [1, 1000] 之内。
 * 操作次数将在  [1, 1000] 之内。
 * 请不要使用内置的 LinkedList 库。
 *
 *
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */

let Node = function (val) {
  this.val = val
  this.next = null
}

let MyLinkedList = function () {
  this.head = null
  this.tail = null
  this.size = 0
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (this.size === 0 || index > this.size - 1 || index < 0) {
    return -1
  }

  let curr = this.head

  for (let i = 0; i < index; i++) {
    curr = curr.next
  }

  return curr.val
}

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new Node(val)

  if (!this.head) {
    this.head = newNode
    this.tail = newNode
  } else {
    newNode.next = this.head
    this.head = newNode
  }

  this.size++

  return this
}

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new Node(val)

  if (!this.head) {
    this.head = newNode
    this.tail = newNode
  } else {
    this.tail.next = newNode
    this.tail = newNode
  }

  this.size++

  return this
}

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  const newNode = new Node(val)

  if (index > this.size) {
    return
  }

  if (index <= 0) {
    return this.addAtHead(val)
  }

  if (index === this.size) {
    return this.addAtTail(val)
  }

  let curr = this.head

  for (let i = 0; i < index - 1; i++) {
    curr = curr.next
  }

  newNode.next = curr.next ? curr.next : null
  curr.next = newNode
  this.size++

  return this
}

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.size || index < 0) return
  if (index === 0) {
    this.head = this.head.next
    this.size--
    return this
  }

  let curr = this.head
  for (let i = 0; i < index - 1; i++) {
    curr = curr.next
  }

  curr.next = curr.next.next ? curr.next.next : null
  if (!curr.next) {
    this.tail = curr
  }
  this.size--
  return this
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * let obj = new MyLinkedList()
 * let param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
