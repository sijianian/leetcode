/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 *
 * https://leetcode-cn.com/problems/spiral-matrix-ii/description/
 *
 * algorithms
 * Medium (74.45%)
 * Likes:    120
 * Dislikes: 0
 * Total Accepted:    16.7K
 * Total Submissions: 22.3K
 * Testcase Example:  '3'
 *
 * 给定一个正整数 n，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
 *
 * 示例:
 *
 * 输入: 3
 * 输出:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 8, 9, 4 ],
 * ⁠[ 7, 6, 5 ]
 * ]
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
TODO: var generateMatrix = function (n) {
  if (n == 0) {
    return []
  }

  if (n == 1) {
    return [[1]]
  }

  let result = []
  let num = 1

  for (let i = 0; i < n; i++) {
    result.push([])
  }

  let rowStart = 0
  let rowEnd = n - 1
  let colStart = 0
  let colEnd = n - 1

  while (rowStart <= rowEnd && colStart <= colEnd) {
    // to right
    for (let i = colStart; i <= colEnd; i++) {
      result[rowStart][i] = num
      num++
    }
    rowStart++

    // downwards
    for (let i = rowStart; i <= rowEnd; i++) {
      result[i][colEnd] = num
      num++
    }
    colEnd--

    // to left
    for (let i = colEnd; i >= colStart; i--) {
      result[rowEnd][i] = num
      num++
    }
    rowEnd--

    // upwards
    for (let i = rowEnd; i >= rowStart; i--) {
      result[i][colStart] = num
      num++
    }
    colStart++
  }
  return result
}
// @lc code=end
