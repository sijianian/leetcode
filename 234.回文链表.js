/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (38.45%)
 * Likes:    276
 * Dislikes: 0
 * Total Accepted:    40.6K
 * Total Submissions: 104.5K
 * Testcase Example:  '[1,2]'
 *
 * 请判断一个链表是否为回文链表。
 *
 * 示例 1:
 *
 * 输入: 1->2
 * 输出: false
 *
 * 示例 2:
 *
 * 输入: 1->2->2->1
 * 输出: true
 *
 *
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const reverseList = head => {
  if (!head) {
    return null
  }

  let pre = null
  let next = null

  while (head) {
    next = head.next
    head.next = pre
    pre = head
    head = next
  }

  return pre
}
const isPalindrome = head => {
  if (head === null || head.next === null) {
    return true
  }

  let slow = head
  let fast = head

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }

  slow.next = reverseList(slow.next)
  slow = slow.next

  while(slow !== null) {
    if (head.val !== slow.val) {
      return false
    }

    head = head.next
    slow = slow.next
  }

  return true
}
