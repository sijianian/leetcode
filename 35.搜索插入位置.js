/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 *
 * https://leetcode-cn.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (44.12%)
 * Likes:    320
 * Dislikes: 0
 * Total Accepted:    72.9K
 * Total Submissions: 164.7K
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 *
 * 你可以假设数组中无重复元素。
 *
 * 示例 1:
 *
 * 输入: [1,3,5,6], 5
 * 输出: 2
 *
 *
 * 示例 2:
 *
 * 输入: [1,3,5,6], 2
 * 输出: 1
 *
 *
 * 示例 3:
 *
 * 输入: [1,3,5,6], 7
 * 输出: 4
 *
 *
 * 示例 4:
 *
 * 输入: [1,3,5,6], 0
 * 输出: 0
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  return binarySearch(target, nums, 0, nums.length - 1)
}

const binarySearch = (data, arr, start, end) => {
  if (start > end) {
    return start
  }

  const mid = Math.floor(start + ((end - start) >> 1))

  if (data === arr[mid]) {
    return mid
  } else if (data < arr[mid]) {
    return binarySearch(data, arr, start, mid - 1)
  } else {
    return binarySearch(data, arr, mid + 1, end)
  }
}
