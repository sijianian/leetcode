/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树 https://leetcode-cn.com/problems/balanced-binary-tree/
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
 * @return {boolean}
 */
const isBalanced = root => {
  return balanced(root) !== -1
}

const balanced = node => {
  if (!node) {
    return 0
  }

  const left = balanced(node.left)
  const right = balanced(node.right)

  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1
  }

  return Math.max(left, right) + 1
}
