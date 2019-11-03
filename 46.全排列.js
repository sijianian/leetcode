/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (71.53%)
 * Likes:    397
 * Dislikes: 0
 * Total Accepted:    48.8K
 * Total Submissions: 67.8K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个没有重复数字的序列，返回其所有可能的全排列。
 *
 * 示例:
 *
 * 输入: [1,2,3]
 * 输出:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 *
 */

// @lc code=start

const backtrack = (result, tempList, nums) => {
  if (tempList.length === nums.length) {
    return result.push([...tempList])
  }

  for (let i = 0; i < nums.length; i++) {
    if (tempList.includes(nums[i])) {
      continue
    }

    tempList.push(nums[i])
    backtrack(result, tempList, nums)
    tempList.pop()
  }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = nums => {
  const result = []

  backtrack(result, [], nums)

  return result
}
// @lc code=end
