/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 *
 * https://leetcode-cn.com/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (55.25%)
 * Likes:    323
 * Dislikes: 0
 * Total Accepted:    30.7K
 * Total Submissions: 55.6K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
 *
 * k 是一个正整数，它的值小于或等于链表的长度。
 *
 * 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 *
 * 示例 :
 *
 * 给定这个链表：1->2->3->4->5
 *
 * 当 k = 2 时，应当返回: 2->1->4->3->5
 *
 * 当 k = 3 时，应当返回: 3->2->1->4->5
 *
 * 说明 :
 *
 *
 * 你的算法只能使用常数的额外空间。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
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

function reverse(curr) {
  let prev = null

  while (curr) {
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  return prev
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function reverseKGroup(head, k) {
  if (!head) {
    return null
  }

  let tail = head

  for (let i = 1; i < k; i++) {
    tail = tail.next
    if (!tail) {
      return head
    }
  }

  let next = tail.next
  tail.next = null
  reverse(head)
  head.next = reverseKGroup(next, k)

  return tail
}
// @lc code=end
