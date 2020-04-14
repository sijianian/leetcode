/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (46.95%)
 * Likes:    1148
 * Dislikes: 0
 * Total Accepted:    85.5K
 * Total Submissions: 181.8K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 示例:
 *
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 *
 *
 * 进阶:
 *
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 *
 */
/**
 * 思路
 *
 * 1. 动态规划的是首先对数组进行遍历，当前最大连续子序列和为 sum，结果为 ans
 * 2. 如果 sum > 0，则说明 sum 对结果有增益效果，则 sum 保留并加上当前遍历数字
 * 3. 如果 sum <= 0，则说明 sum 对结果无增益效果，需要舍弃，则 sum 直接更新为当前遍历数字
 * 4. 每次比较 sum 和 ans的大小，将最大值置为ans，遍历结束返回结果
 *
 * 时间复杂度 O(n)
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums = []) => {
  let ans = nums[0]
  let sum = 0

  for (const item of nums) {
    if (sum > 0) {
      sum += item
    } else {
      sum = item
    }

    ans = Math.max(sum, ans)
  }

  return ans
}
