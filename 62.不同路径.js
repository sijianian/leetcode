/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 *
 * https://leetcode-cn.com/problems/unique-paths/description/
 *
 * algorithms
 * Medium (55.94%)
 * Likes:    333
 * Dislikes: 0
 * Total Accepted:    42.4K
 * Total Submissions: 75K
 * Testcase Example:  '3\n2'
 *
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 *
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 *
 * 问总共有多少条不同的路径？
 *
 *
 *
 * 例如，上图是一个7 x 3 的网格。有多少可能的路径？
 *
 * 说明：m 和 n 的值均不超过 100。
 *
 * 示例 1:
 *
 * 输入: m = 3, n = 2
 * 输出: 3
 * 解释:
 * 从左上角开始，总共有 3 条路径可以到达右下角。
 * 1. 向右 -> 向右 -> 向下
 * 2. 向右 -> 向下 -> 向右
 * 3. 向下 -> 向右 -> 向右
 *
 *
 * 示例 2:
 *
 * 输入: m = 7, n = 3
 * 输出: 28
 *
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = []

  for (let i = 0; i < m + 1; i++) {
    dp[i] = []
    dp[i][0] = 0
  }

  for (let i = 0; i < n + 1; i++) {
    dp[0][i] = 0
  }

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      dp[i][j] = j === 1 ? 1 : dp[i - 1][j] + dp[i][j - 1] // 转移方程
    }
  }

  return dp[m][n]
}
// @lc code=end
