/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 *
 * https://leetcode-cn.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (45.35%)
 * Likes:    427
 * Dislikes: 0
 * Total Accepted:    67.9K
 * Total Submissions: 149.6K
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 *
 * 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
 *
 * L   C   I   R
 * E T O E S I I G
 * E   D   H   N
 *
 *
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
 *
 * 请你实现这个将字符串进行指定行数变换的函数：
 *
 * string convert(string s, int numRows);
 *
 * 示例 1:
 *
 * 输入: s = "LEETCODEISHIRING", numRows = 3
 * 输出: "LCIRETOESIIGEDHN"
 *
 *
 * 示例 2:
 *
 * 输入: s = "LEETCODEISHIRING", numRows = 4
 * 输出: "LDREOEIIECIHNTSG"
 * 解释:
 *
 * L     D     R
 * E   O E   I I
 * E C   I H   N
 * T     S     G
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
TODO: const convert = (s, numRows) => {
  // return original string if can't zigzag
  if (numRows === 1 || s.length < numRows) {
    return s
  }

  let rows = []
  let converted = ''
  let reverse = false
  let count = 0

  // prepare rows
  for (let i = 0; i < numRows; i++) {
    rows[i] = []
  }

  // reverse the push flow when reaching turning points
  for (let i = 0; i < s.length; i++) {
    rows[count].push(s[i])
    reverse ? count-- : count++

    if (count === numRows - 1 || count === 0) {
      reverse = !reverse
    }
  }
  // put together converted string
  return rows.reduce((converted, cur) => converted + cur.join(''), '')
}
// @lc code=end
