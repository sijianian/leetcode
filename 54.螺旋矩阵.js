/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 *
 * https://leetcode-cn.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (37.01%)
 * Likes:    219
 * Dislikes: 0
 * Total Accepted:    25.5K
 * Total Submissions: 68.5K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
 *
 * 示例 1:
 *
 * 输入:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 * 输出: [1,2,3,6,9,8,7,4,5]
 *
 *
 * 示例 2:
 *
 * 输入:
 * [
 * ⁠ [1, 2, 3, 4],
 * ⁠ [5, 6, 7, 8],
 * ⁠ [9,10,11,12]
 * ]
 * 输出: [1,2,3,4,8,12,11,10,9,5,6,7]
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// TODO:
const spiralOrder = function (matrix) {
  if (!matrix.length) {
    return []
  }

  const res = []
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]
  const range = [matrix[0].length, matrix.length - 1]

  let d = 0
  let r = 0
  let c = -1

  while (range[d % 2] > 0) {
    for (let i = 0; i < range[d % 2]; i++) {
      r += dirs[d][0]
      c += dirs[d][1]
      res.push(matrix[r][c])
    }

    range[d % 2]--
    d = (d + 1) % 4
  }

  return res
}
// @lc code=end
