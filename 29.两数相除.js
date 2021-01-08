/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 *
 * https://leetcode-cn.com/problems/divide-two-integers/description/
 *
 * algorithms
 * Medium (18.81%)
 * Likes:    240
 * Dislikes: 0
 * Total Accepted:    29.4K
 * Total Submissions: 154.6K
 * Testcase Example:  '10\n3'
 *
 * 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
 *
 * 返回被除数 dividend 除以除数 divisor 得到的商。
 *
 * 示例 1:
 *
 * 输入: dividend = 10, divisor = 3
 * 输出: 3
 *
 * 示例 2:
 *
 * 输入: dividend = 7, divisor = -3
 * 输出: -2
 *
 * 说明:
 *
 *
 * 被除数和除数均为 32 位有符号整数。
 * 除数不为 0。
 * 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−2^31,  2^31 − 1]。本题中，如果除法结果溢出，则返回 2^31 − 1。
 *
 *
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function (dividend, divisor) {
  if (divisor === 0) return 0
  if (dividend === 0) return 0
  if (dividend === -2147483648 && divisor === -1) return 2147483647

  let isPositive = true
  if (dividend > 0 !== divisor > 0) isPositive = false

  divisor = Math.abs(divisor)
  dividend = Math.abs(dividend)

  let count = 1,
    result = 0,
    base = divisor

  while (dividend >= divisor) {
    count = 1
    base = divisor
    while (base <= dividend >> 1) {
      base = base << 1
      count = count << 1
    }
    result += count
    dividend -= base
  }

  if (!isPositive) result = -result
  return result
}
// @lc code=end
