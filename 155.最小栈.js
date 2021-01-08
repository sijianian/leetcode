/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 *
 * https://leetcode-cn.com/problems/min-stack/description/
 *
 * algorithms
 * Easy (49.72%)
 * Likes:    270
 * Dislikes: 0
 * Total Accepted:    42.1K
 * Total Submissions: 84.4K
 * Testcase Example:  '["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]'
 *
 * 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。
 *
 *
 * push(x) -- 将元素 x 推入栈中。
 * pop() -- 删除栈顶的元素。
 * top() -- 获取栈顶元素。
 * getMin() -- 检索栈中的最小元素。
 *
 *
 * 示例:
 *
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> 返回 -3.
 * minStack.pop();
 * minStack.top();      --> 返回 0.
 * minStack.getMin();   --> 返回 -2.
 *
 *
 */
/**
 * initialize your data structure here.
 */
const MinStack = function () {
  this.minStack = []
  this.container = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.container.push(x)

  if (
    this.minStack.length === 0 ||
    x <= this.minStack[this.minStack.length - 1]
  ) {
    this.minStack.push(x)
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let x = this.container.pop()

  if (x === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop()
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.container[this.container.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
