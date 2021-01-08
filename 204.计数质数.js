/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 *
 * https://leetcode-cn.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (29.64%)
 * Likes:    198
 * Dislikes: 0
 * Total Accepted:    27.5K
 * Total Submissions: 91.4K
 * Testcase Example:  '10'
 *
 * 统计所有小于非负整数 n 的质数的数量。
 *
 * 示例:
 *
 * 输入: 10
 * 输出: 4
 * 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 *
 *
 */
/**
 * @param {number} n
 * @return {number}
 */
//TODO:
const countPrimes = function (n) {
  let count = 0
  let signs = []

  for (let i = 2; i < n; i++) {
    if (!signs[i]) {
      count++
      for (let j = 2 * i; j < n; j += i) {
        signs[j] = true
      }
    }
  }

  return count
}
