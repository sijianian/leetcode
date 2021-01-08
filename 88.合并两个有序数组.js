/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode-cn.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (45.06%)
 * Likes:    299
 * Dislikes: 0
 * Total Accepted:    63.9K
 * Total Submissions: 141.7K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
 *
 * 说明:
 *
 *
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 *
 *
 * 示例:
 *
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 *
 * 输出: [1,2,2,3,5,6]
 *
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  let current = m + n - 1

  while (current >= 0) {
    if (n === 0) {
      return
    }

    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[current--] = nums1[--m]
    } else {
      nums1[current--] = nums2[--n]
    }
  }
}

/**
 * 复杂度分析：
 *
 * 时间复杂度：O(M + N)
 * 空间复杂度：O(1)
 */
