/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (62.68%)
 * Likes:    276
 * Dislikes: 0
 * Total Accepted:    31.7K
 * Total Submissions: 50.6K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * 根据一棵树的前序遍历与中序遍历构造二叉树。
 *
 * 注意:
 * 你可以假设树中没有重复的元素。
 *
 * 例如，给出
 *
 * 前序遍历 preorder = [3,9,20,15,7]
 * 中序遍历 inorder = [9,3,15,20,7]
 *
 * 返回如下的二叉树：
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => {
  if (preorder.length === 0) {
    return null
  }

  if (preorder.length === 1) {
    return new TreeNode(preorder[0])
  }

  const value = preorder[0]
  const index = inorder.indexOf(value)

  const vinLeft = inorder.slice(0, index)
  const vinRight = inorder.slice(index + 1)

  const preLeft = preorder.slice(1, index + 1)
  const preRight = preorder.slice(index + 1)

  const node = new TreeNode(value)

  node.left = buildTree(preLeft, vinLeft)
  node.right = buildTree(preRight, vinRight)

  return node
}
// @lc code=end
