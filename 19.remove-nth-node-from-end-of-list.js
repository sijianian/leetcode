/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
// https://pic.leetcode-cn.com/cc43daa8cbb755373ce4c5cd10c44066dc770a34a6d2913a52f8047cbf5e6e56-file_1559548337458
const removeNthFromEnd = (head, n) => {
  let pre = { next: head }
  let start = pre
  let end = pre

  n = n + 1

  while (n--) {
    start = start.next
  }

  while (start) {
    start = start.next
    end = end.next
  }

  end.next = end.next.next

  return pre.next
}
