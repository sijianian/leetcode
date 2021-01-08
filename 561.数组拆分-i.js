/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分 I
 *
 * https://leetcode-cn.com/problems/array-partition-i/description/
 *
 * algorithms
 * Easy (68.33%)
 * Likes:    125
 * Dislikes: 0
 * Total Accepted:    24.8K
 * Total Submissions: 36.1K
 * Testcase Example:  '[1,4,3,2]'
 *
 * 给定长度为 2n 的数组, 你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从1 到
 * n 的 min(ai, bi) 总和最大。
 *
 * 示例 1:
 *
 *
 * 输入: [1,4,3,2]
 *
 * 输出: 4
 * 解释: n 等于 2, 最大总和为 4 = min(1, 2) + min(3, 4).
 *
 *
 * 提示:
 *
 *
 * n 是正整数,范围在 [1, 10000].
 * 数组中的元素范围在 [-10000, 10000].
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function (nums) {
  return nums
    .sort((a, b) => a - b)
    .filter((x, index) => index % 2 === 0)
    .reduce((a, b) => a + b)
}
// @lc code=end
