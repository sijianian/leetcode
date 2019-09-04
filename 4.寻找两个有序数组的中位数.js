/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 *
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (35.87%)
 * Likes:    1433
 * Dislikes: 0
 * Total Accepted:    83.1K
 * Total Submissions: 231.7K
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 *
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 *
 * 你可以假设 nums1 和 nums2 不会同时为空。
 *
 * 示例 1:
 *
 * nums1 = [1, 3]
 * nums2 = [2]
 *
 * 则中位数是 2.0
 *
 *
 * 示例 2:
 *
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 *
 * 则中位数是 (2 + 3)/2 = 2.5
 *
 *
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1)

  const x = nums1.length,
    y = nums2.length
  let lo = 0,
    hi = x

  while (lo <= hi) {
    let partitionX = ((lo + hi) / 2) | 0,
      partitionY = ((x + y + 1) / 2 - partitionX) | 0

    let maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1]
    let minRightX = partitionX === x ? Infinity : nums1[partitionX]

    let maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1]
    let minRightY = partitionY === y ? Infinity : nums2[partitionY]

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((x + y) & 1) {
        return Math.max(maxLeftX, maxLeftY)
      }

      return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2
    } else if (maxLeftX > minRightY) {
      hi = partitionX - 1
    } else {
      lo = partitionX + 1
    }
  }
}
