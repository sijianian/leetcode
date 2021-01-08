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
  if (l1 === null) {
    return l2
  }

  if (l2 === null) {
    return l1
  }

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l2.next, l1)
    return l2
  }
}

const mergeKLists = function (lists) {
  if (lists.length === 0) {
    return null
  }

  if (lists.length === 1) {
    return lists[0]
  }

  if (lists.length === 2) {
    return mergeTwoLists(lists[0], lists[1])
  }

  const left = []
  const right = []
  const mid = Math.floor(lists.length / 2)

  for (let i = 0; i < lists.length; i++) {
    if (i < mid) {
      left.push(lists[i])
    } else {
      right.push(lists[i])
    }
  }

  return mergeTwoLists(mergeKLists(left), mergeKLists(right))
}
// @lc code=end
