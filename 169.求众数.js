/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 *
 * https://leetcode-cn.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (60.29%)
 * Likes:    303
 * Dislikes: 0
 * Total Accepted:    63.8K
 * Total Submissions: 105.8K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 *
 * 你可以假设数组是非空的，并且给定的数组总是存在众数。
 *
 * 示例 1:
 *
 * 输入: [3,2,3]
 * 输出: 3
 *
 * 示例 2:
 *
 * 输入: [2,2,1,1,1,2,2]
 * 输出: 2
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = nums => {
  let result
  const countMap = {}

  nums.forEach(item => {
    countMap[item] = countMap[item] + 1 || 1

    if (countMap[item] > nums.length / 2) {
      result = item
    }
  })

  return result
}
