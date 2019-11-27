/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (65.18%)
 * Likes:    129
 * Dislikes: 0
 * Total Accepted:    17.9K
 * Total Submissions: 27.5K
 * Testcase Example:  '[9,3,15,20,7]\n[9,15,7,20,3]'
 *
 * 根据一棵树的中序遍历与后序遍历构造二叉树。
 *
 * 注意:
 * 你可以假设树中没有重复的元素。
 *
 * 例如，给出
 *
 * 中序遍历 inorder = [9,3,15,20,7]
 * 后序遍历 postorder = [9,15,7,20,3]
 *
 * 返回如下的二叉树：
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

// TODO:
const helper = (inorder, postorder, toInorder, low, high) => {
  if (low > high) {
    return null
  }

  const val = postorder[high]
  const node = new TreeNode(val)

  if (low < high) {
    let leftSize = 0

    while (toInorder[postorder[low + leftSize]] < toInorder[val]) {
      leftSize++
    }

    node.left = helper(inorder, postorder, toInorder, low, low + leftSize - 1)
    node.right = helper(inorder, postorder, toInorder, low + leftSize, high - 1)
  }

  return node
}

const buildTree = (inorder, postorder) => {
  if (!inorder.length) {
    return null
  }

  const toInorder = inorder.reduce((map, a, i) => ((map[a] = i), map), {})

  return helper(inorder, postorder, toInorder, 0, postorder.length - 1)
}
// @lc code=end
