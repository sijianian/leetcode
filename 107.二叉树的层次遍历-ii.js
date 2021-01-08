/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (63.17%)
 * Likes:    157
 * Dislikes: 0
 * Total Accepted:    31.9K
 * Total Submissions: 50.6K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 *
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 *
 * 返回其自底向上的层次遍历为：
 *
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
 *
 *
 */

// @lc code=start
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
var levelOrderBottom = function (root) {
  if (root == null) {
    return []
  }
  let queue = []
  let results = []
  queue.push(root)
  while (queue.length > 0) {
    /* level-order traversal */
    let level = [] /* collect node.vals for current level */
    let size =
      queue.length /* instead of using recursion, we will use a loop bounded by the queue size */
    while (size > 0) {
      let current = queue.shift() /* remove and capture next item from queue */
      level.push([
        current.val,
      ]) /* add the current val to the current level array */

      /* if we have a left or right subtree, explore */
      if (current.left != null) {
        queue.push(current.left)
      }

      if (current.right != null) {
        queue.push(current.right)
      }

      size-- /* level complete, decrement size and proceed */
    }

    results.push(level) /* push the last level's results */
  }
  return results.reverse() /* return results, in reverse order */
}
// @lc code=end
