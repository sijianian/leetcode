/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (26.69%)
 * Likes:    1201
 * Dislikes: 0
 * Total Accepted:    97.5K
 * Total Submissions: 363.4K
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 *
 * 示例 1：
 *
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 *
 *
 * 示例 2：
 *
 * 输入: "cbbd"
 * 输出: "bb"
 *
 *
 */
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
  if (s === '') {
    return ''
  }
  let cell = [],
    maxLen = 0,
    maxEnd = 0

  for (let i = 0; i < s.length; i++) {
    cell.push([])

    for (let j = 0; j < s.length; j++) {
      let beforeIndex = s.length - 1 - i

      if (s[beforeIndex] === s[j]) {
        if (i === 0 || j === 0) {
          cell[i][j] = 1
        } else {
          cell[i][j] = cell[i - 1][j - 1] + 1
        }
      } else {
        cell[i][j] = 0 // 不能省略
      }

      if (cell[i][j] > maxLen) {
        let firstIndex = j - cell[i][j] + 1

        if (beforeIndex === firstIndex) {
          maxLen = cell[i][j]
          maxEnd = j
        }
      }
    }
  }
  return s.slice(maxEnd + 1 - maxLen, maxEnd + 1)
}
