/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Hard (68.46%)
 * Likes:    189
 * Dislikes: 0
 * Total Accepted:    39.5K
 * Total Submissions: 57.4K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 后序 遍历。
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
 * 输出: [3,2,1]
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
const postorderTraversal = (root, array = []) => {
  if (!root) {
    return array
  }

  postorderTraversal(root.left, array)
  postorderTraversal(root.right, array)
  array.push(root.val)

  return array
}
// @lc code=end
const postorderTraversal2 = root => {
  const result = []
  const stack = []

  let last = null
  let current = root

  while (current || stack.length > 0) {
    while (current) {
      stack.push(current)
      current = current.left
    }

    current = stack[stack.length - 1]

    if (!current.right || current.right === last) {
      current = stack.pop()
      result.push(current.val)
      last = current
      current = null
    } else {
      current = current.right
    }
  }
}
