/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 *
 * https://leetcode-cn.com/problems/subsets/description/
 *
 * algorithms
 * Medium (74.73%)
 * Likes:    355
 * Dislikes: 0
 * Total Accepted:    38.5K
 * Total Submissions: 51.5K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 *
 * 说明：解集不能包含重复的子集。
 *
 * 示例:
 *
 * 输入: nums = [1,2,3]
 * 输出:
 * [
 * ⁠ [3],
 * [1],
 * [2],
 * [1,2,3],
 * [1,3],
 * [2,3],
 * [1,2],
 * []
 * ]
 *
 */

// @lc code=start

const backtrack = (list, tempList, nums, start) => {
  list.push([...tempList])

  for (let i = start; i < nums.length; i++) {
    tempList.push(nums[i])
    backtrack(list, tempList, nums, i + 1)
    tempList.pop()
  }
}

const subsets = nums => {
  const list = []
  backtrack(list, [], nums, 0)
  return list
}
// @lc code=end
