/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 *
 * https://leetcode-cn.com/problems/diagonal-traverse/description/
 *
 * algorithms
 * Medium (39.19%)
 * Likes:    65
 * Dislikes: 0
 * Total Accepted:    9K
 * Total Submissions: 23K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。
 *
 *
 *
 * 示例:
 *
 * 输入:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 *
 * 输出:  [1,2,4,7,5,3,6,8,9]
 *
 * 解释:
 *
 *
 *
 *
 *
 * 说明:
 *
 *
 * 给定矩阵中的元素总数不会超过 100000 。
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const findDiagonalOrder = function (matrix) {
  if (matrix.length < 1 || matrix[0].length < 1) {
    return []
  }

  let i = 0
  let j = 0
  let m = matrix.length
  let n = matrix[0].length

  let res = []

  for (let k = 0; k < m * n; k++) {
    res.push(matrix[i][j])

    if ((i - j) % 2 === 0) {
      if (j === n - 1) {
        i++
      } else if (i === 0) {
        j++
      } else {
        i--
        j++
      }
    } else {
      if (i === m - 1) {
        j++
      } else if (j === 0) {
        i++
      } else {
        i++
        j--
      }
    }
  }

  return res
}
// @lc code=end
