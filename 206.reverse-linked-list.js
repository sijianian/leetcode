/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @return {ListNode}
 */
const reverseList = head => {
  let temp = null
  let newHead = null

  while (head !== null) {
    temp = head
    head = head.next

    temp.next = newHead
    newHead = temp
  }

  return newHead
}
