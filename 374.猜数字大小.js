/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 *
 * https://leetcode-cn.com/problems/guess-number-higher-or-lower/description/
 *
 * algorithms
 * Easy (41.46%)
 * Likes:    54
 * Dislikes: 0
 * Total Accepted:    18K
 * Total Submissions: 41.7K
 * Testcase Example:  '10\n6'
 *
 * 我们正在玩一个猜数字游戏。 游戏规则如下：
 * 我从 1 到 n 选择一个数字。 你需要猜我选择了哪个数字。
 * 每次你猜错了，我会告诉你这个数字是大了还是小了。
 * 你调用一个预先定义好的接口 guess(int num)，它会返回 3 个可能的结果（-1，1 或 0）：
 *
 * -1 : 我的数字比较小
 * ⁠1 : 我的数字比较大
 * ⁠0 : 恭喜！你猜对了！
 *
 *
 * 示例 :
 *
 * 输入: n = 10, pick = 6
 * 输出: 6
 *
 */

// @lc code=start

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function(n) {
  let left = 1
  let right = n

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    let res = guess(mid)

    if (res === 0) {
      return mid
    } else if (res < 0) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return -1
}
// @lc code=end
