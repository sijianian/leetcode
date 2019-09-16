/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (58.30%)
 * Likes:    275
 * Dislikes: 0
 * Total Accepted:    44.8K
 * Total Submissions: 76.2K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
 *
 * 例如:
 * 给定二叉树: [3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 *
 * 返回其层次遍历结果：
 *
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
 * ]
 *
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = root => {
  if (!root) {
    return []
  }

  let result = []
  let queue = [root]

  while (queue.length) {
    let arr = []
    let temp = []

    while (queue.length) {
      let curr = queue.shift()
      arr.push(curr.val)

      if (curr.left) {
        temp.push(curr.left)
      }

      if (curr.right) {
        temp.push(curr.right)
      }
    }

    queue = temp
    result.push(arr)
  }

  return result
}
