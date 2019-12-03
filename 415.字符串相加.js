/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 *
 * https://leetcode-cn.com/problems/add-strings/description/
 *
 * algorithms
 * Easy (48.35%)
 * Likes:    115
 * Dislikes: 0
 * Total Accepted:    18.2K
 * Total Submissions: 37.6K
 * Testcase Example:  '"0"\n"0"'
 *
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 *
 * 注意：
 *
 *
 * num1 和num2 的长度都小于 5100.
 * num1 和num2 都只包含数字 0-9.
 * num1 和num2 都不包含任何前导零。
 * 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。
 *
 *
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function(num1, num2) {
  let i = num1.length - 1
  let j = num2.length - 1
  let carry = 0
  let sum = ''

  for (; i >= 0 || j >= 0 || carry > 0; i--, j--) {
    const digit1 = i < 0 ? 0 : num1.charAt(i) - '0'
    const digit2 = j < 0 ? 0 : num2.charAt(j) - '0'

    const digitsSum = digit1 + digit2 + carry

    sum = `${digitsSum % 10}${sum}`
    carry = Math.floor(digitsSum / 10)
  }

  return sum
}
// @lc code=end
