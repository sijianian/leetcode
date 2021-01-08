/*
 * @lc app=leetcode.cn id=622 lang=javascript
 *
 * [622] 设计循环队列
 *
 * https://leetcode-cn.com/problems/design-circular-queue/description/
 *
 * algorithms
 * Medium (39.07%)
 * Likes:    66
 * Dislikes: 0
 * Total Accepted:    16K
 * Total Submissions: 40.5K
 * Testcase Example:  '["MyCircularQueue","enQueue","enQueue","enQueue","enQueue","Rear","isFull","deQueue","enQueue","Rear"]\n[[3],[1],[2],[3],[4],[],[],[],[4],[]]'
 *
 * 设计你的循环队列实现。 循环队列是一种线性数据结构，其操作表现基于
 * FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环。它也被称为“环形缓冲器”。
 *
 *
 * 循环队列的一个好处是我们可以利用这个队列之前用过的空间。在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。但是使用循环队列，我们能使用这些空间去存储新的值。
 *
 * 你的实现应该支持如下操作：
 *
 *
 * MyCircularQueue(k): 构造器，设置队列长度为 k 。
 * Front: 从队首获取元素。如果队列为空，返回 -1 。
 * Rear: 获取队尾元素。如果队列为空，返回 -1 。
 * enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
 * deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
 * isEmpty(): 检查循环队列是否为空。
 * isFull(): 检查循环队列是否已满。
 *
 *
 *
 *
 * 示例：
 *
 * MyCircularQueue circularQueue = new MycircularQueue(3); // 设置长度为 3
 *
 * circularQueue.enQueue(1);  // 返回 true
 *
 * circularQueue.enQueue(2);  // 返回 true
 *
 * circularQueue.enQueue(3);  // 返回 true
 *
 * circularQueue.enQueue(4);  // 返回 false，队列已满
 *
 * circularQueue.Rear();  // 返回 3
 *
 * circularQueue.isFull();  // 返回 true
 *
 * circularQueue.deQueue();  // 返回 true
 *
 * circularQueue.enQueue(4);  // 返回 true
 *
 * circularQueue.Rear();  // 返回 4
 *
 *
 *
 *
 * 提示：
 *
 *
 * 所有的值都在 0 至 1000 的范围内；
 * 操作数将在 1 至 1000 的范围内；
 * 请不要使用内置的队列库。
 *
 *
 */

// @lc code=start
/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
const MyCircularQueue = function (k) {
  this.storage = []
  this.currentSize = 0
  this.maxSize = k
  this.front = 0
  this.rear = -1
}

MyCircularQueue.prototype.enQueue = function (value) {
  if (this.currentSize >= this.maxSize) {
    return false
  }

  this.rear = ++this.rear % this.maxSize
  this.storage[this.rear] = value
  this.currentSize++

  return true
}

MyCircularQueue.prototype.deQueue = function () {
  if (this.currentSize === 0) {
    return false
  }

  this.front = ++this.front % this.maxSize
  this.currentSize--

  return true
}

MyCircularQueue.prototype.Front = function () {
  return this.currentSize === 0 ? -1 : this.storage[this.front]
}

MyCircularQueue.prototype.Rear = function () {
  return this.currentSize === 0 ? -1 : this.storage[this.rear]
}

MyCircularQueue.prototype.isEmpty = function () {
  return this.currentSize === 0
}

MyCircularQueue.prototype.isFull = function () {
  return this.currentSize === this.maxSize
}
// @lc code=end
