/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Medium (62.39%)
 * Likes:    173
 * Dislikes: 0
 * Total Accepted:    52.4K
 * Total Submissions: 83.7K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 前序 遍历。
 *
 * 示例:
 *
 * 输入: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 *
 * 输出: [1,2,3]
 *
 *
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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
 * @return {number[]}
 */
const preorderTraversal = (root, array = []) => {
  if (!root) {
    return array
  }

  array.push(root.val)
  preorderTraversal(root.left, array)
  preorderTraversal(root.right, array)

  return array
}
// @lc code=end

// 非递归实现
const preorderTraversal2 = root => {
  const result = []
  const stack = []

  let current = root

  while (current || stack.length > 0) {
    while (current) {
      result.push(current.val)
      stack.push(current)
      current = current.left
    }

    current = stack.pop()
    current = current.right
  }

  return result
}
