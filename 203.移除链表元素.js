/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 *
 * https://leetcode-cn.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (42.75%)
 * Likes:    312
 * Dislikes: 0
 * Total Accepted:    48K
 * Total Submissions: 111.6K
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * 删除链表中等于给定值 val 的所有节点。
 *
 * 示例:
 *
 * 输入: 1->2->6->3->4->5->6, val = 6
 * 输出: 1->2->3->4->5
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function (head, val) {
  if (!head) {
    return head
  }

  while (head) {
    if (head.val === val) {
      head = head.next
    } else {
      break
    }
  }

  let curr = head

  while (curr && curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next
    } else {
      curr = curr.next
    }
  }

  return head
}
// @lc code=end
