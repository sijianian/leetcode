/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (63.68%)
 * Likes:    189
 * Dislikes: 0
 * Total Accepted:    37.4K
 * Total Submissions: 58.4K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 *
 *
 *
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 *
 * 示例:
 *
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 *
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = numRows => {
  if (numRows === 0) {
    return []
  }

  const result = []

  for (let i = 0; i < numRows; i++) {
    let currRow = []

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        currRow.push(1)
      } else {
        currRow.push(result[i - 1][j - 1] + result[i - 1][j])
      }
    }

    result.push(currRow)
  }

  return result
}
