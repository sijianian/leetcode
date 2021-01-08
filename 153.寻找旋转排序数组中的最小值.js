/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 *
 * https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (49.96%)
 * Likes:    149
 * Dislikes: 0
 * Total Accepted:    36.2K
 * Total Submissions: 72.2K
 * Testcase Example:  '[3,4,5,1,2]'
 *
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 *
 * ( 例如，数组 [0,1,2,4,5,6,7]  可能变为 [4,5,6,7,0,1,2] )。
 *
 * 请找出其中最小的元素。
 *
 * 你可以假设数组中不存在重复元素。
 *
 * 示例 1:
 *
 * 输入: [3,4,5,1,2]
 * 输出: 1
 *
 * 示例 2:
 *
 * 输入: [4,5,6,7,0,1,2]
 * 输出: 0
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
  // let left = 0
  // let right = nums.length - 1

  // while (left < right) {
  //   let mid = Math.floor(left + ((right - left) >> 1))

  //   if (nums[left] <= nums[mid]) {
  //     left = mid + 1
  //   } else {
  //     right = mid
  //   }
  // }

  // return nums[left]
  let l = 0
  let r = nums.length - 1

  while (l < r) {
    const m = Math.floor((l + r) / 2)

    if (nums[m] > nums[r]) {
      l = m + 1
    } else {
      r = m
    }
  }
  return nums[l]
}
// @lc code=end
