/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (34.49%)
 * Likes:    684
 * Dislikes: 0
 * Total Accepted:    117.9K
 * Total Submissions: 340K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 * 示例 1:
 *
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 *
 *
 * 示例 2:
 *
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 *
 *
 * 说明:
 *
 * 所有输入只包含小写字母 a-z 。
 *
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length == 0) {
    return ''
  }

  let ans = strs[0]

  for (let i = 1; i < strs.length; i++) {
    let j = 0

    for (; j < ans.length && j < strs[i].length; j++) {
      if (ans[j] != strs[i][j]) {
        break
      }
    }

    ans = ans.substr(0, j)

    if (ans === '') {
      return ans
    }
  }

  return ans
}
