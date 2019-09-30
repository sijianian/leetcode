/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
 *
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (47.38%)
 * Likes:    349
 * Dislikes: 0
 * Total Accepted:    46K
 * Total Submissions: 96.7K
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 *
 * 示例:
 *
 * 输入:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * 输出: 1->1->2->3->4->4->5->6
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

const mergeTwoLists = (l1, l2) => {
  const dummyHead = {}
  let current = dummyHead

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1 // 把小的添加到结果链表
      current = current.next // 移动结果链表的指针
      l1 = l1.next // 移动小的那个链表的指针
    } else {
      current.next = l2
      current = current.next
      l2 = l2.next
    }
  }

  if (l1 === null) {
    current.next = l2
  } else {
    current.next = l1
  }

  return dummyHead.next
}

const mergeKLists = lists => {
  if (lists.length === 0) return null
  if (lists.length === 1) return lists[0]
  if (lists.length === 2) {
    return mergeTwoLists(lists[0], lists[1])
  }

  const mid = lists.length >> 1
  const l1 = []
  const l2 = []

  for (let i = 0; i < mid; i++) {
    l1[i] = lists[i]
  }

  for (let i = mid, j = 0; i < lists.length; i++, j++) {
    l2[j] = lists[i]
  }

  return mergeTwoLists(mergeKLists(l1), mergeKLists(l2))
}
// @lc code=end
