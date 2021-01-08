/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 *
 * https://leetcode-cn.com/problems/minimum-size-subarray-sum/description/
 *
 * algorithms
 * Medium (40.28%)
 * Likes:    154
 * Dislikes: 0
 * Total Accepted:    21.5K
 * Total Submissions: 53.3K
 * Testcase Example:  '7\n[2,3,1,2,4,3]'
 *
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组。如果不存在符合条件的连续子数组，返回 0。
 *
 * 示例:
 *
 * 输入: s = 7, nums = [2,3,1,2,4,3]
 * 输出: 2
 * 解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
 *
 *
 * 进阶:
 *
 * 如果你已经完成了O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。
 *
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (s, nums) {
  let min = Infinity
  let left = 0
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    while (sum >= s) {
      min = Math.min(min, i + 1 - left)
      sum -= nums[left++]
    }
  }

  return min === Infinity ? 0 : min
}
// @lc code=end
