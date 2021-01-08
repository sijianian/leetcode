/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 *
 * https://leetcode-cn.com/problems/powx-n/description/
 *
 * algorithms
 * Medium (33.49%)
 * Likes:    280
 * Dislikes: 0
 * Total Accepted:    59.5K
 * Total Submissions: 174.1K
 * Testcase Example:  '2.00000\n10'
 *
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数。
 *
 * 示例 1:
 *
 * 输入: 2.00000, 10
 * 输出: 1024.00000
 *
 *
 * 示例 2:
 *
 * 输入: 2.10000, 3
 * 输出: 9.26100
 *
 *
 * 示例 3:
 *
 * 输入: 2.00000, -2
 * 输出: 0.25000
 * 解释: 2^-2 = 1/2^2 = 1/4 = 0.25
 *
 * 说明:
 *
 *
 * -100.0 < x < 100.0
 * n 是 32 位有符号整数，其数值范围是 [−2^31, 2^31 − 1] 。
 *
 *
 */

// @lc code=start
// TODO:
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function (x, n) {
  if (n === 0) return 1

  let pow = Math.abs(n)

  let result =
    pow % 2 === 0 ? myPow(x * x, pow / 2) : myPow(x * x, (pow - 1) / 2) * x

  return n < 0 ? 1 / result : result
}
// @lc code=end
