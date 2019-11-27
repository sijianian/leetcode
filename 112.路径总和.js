/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 *
 * https://leetcode-cn.com/problems/path-sum/description/
 *
 * algorithms
 * Easy (48.28%)
 * Likes:    195
 * Dislikes: 0
 * Total Accepted:    38.9K
 * Total Submissions: 80.7K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,null,1]\n22'
 *
 * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
 *
 * 说明: 叶子节点是指没有子节点的节点。
 *
 * 示例:
 * 给定如下二叉树，以及目标和 sum = 22，
 *
 * ⁠             5
 * ⁠            / \
 * ⁠           4   8
 * ⁠          /   / \
 * ⁠         11  13  4
 * ⁠        /  \      \
 * ⁠       7    2      1
 *
 *
 * 返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
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
 * @param {number} sum
 * @return {boolean}
 */
// TODO: 回溯算法

const hasPathSumCore = (node, expectNumber, stack, sum, result) => {
  stack.push(node.val)
  sum += node.val

  if (!node.left && !node.right && sum === expectNumber) {
    result.push(stack.slice(0))
  }

  if (node.left) {
    hasPathSumCore(node.left, expectNumber, stack, sum, result)
  }

  if (node.right) {
    hasPathSumCore(node.right, expectNumber, stack, sum, result)
  }

  stack.pop()
}

const hasPathSum = (root, sum) => {
  const result = []

  if (root) {
    hasPathSumCore(root, sum, [], 0, result)
  }

  return result
}
// @lc code=end
