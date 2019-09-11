/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = nums => {
  let p0 = 0
  let p2 = nums.length - 1
  let curr = 0

  while (curr <= p2) {
    if (nums[curr] === 0) {
      ;[nums[p0], nums[curr]] = [nums[curr], nums[p0]]
      p0++
      curr++
    } else if (nums[curr] === 2) {
      ;[nums[p2], nums[curr]] = [nums[curr], nums[p2]]
      p2--
    } else {
      curr++
    }
  }
}
