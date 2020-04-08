/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (23.86%)
 * Likes:    1307
 * Dislikes: 0
 * Total Accepted:    90.3K
 * Total Submissions: 378.5K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？找出所有满足条件且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 *
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  if (nums.length < 3) {
    return []
  }

  const list = []

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    let left = i + 1
    let right = nums.length - 1
    let target = -nums[i]

    while (left < right) {
      if (nums[left] + nums[right] === target) {
        list.push([nums[i], nums[left], nums[right]])

        left++
        right--

        while (left < right && nums[left] === nums[left - 1]) {
          left++
        }

        while (left < right && nums[right] === nums[right + 1]) {
          right--
        }
      } else if (nums[left] + nums[right] < target) {
        left++
      } else {
        right--
      }
    }
  }

  return list
}
// @lc code=end
