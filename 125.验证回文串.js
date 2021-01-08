/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 *
 * https://leetcode-cn.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (40.74%)
 * Likes:    119
 * Dislikes: 0
 * Total Accepted:    54.7K
 * Total Submissions: 133.3K
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 *
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 *
 * 示例 1:
 *
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: "race a car"
 * 输出: false
 *
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = s => {
  let strippedString = s.replace(/\W/g, '')
  let reversedString = strippedString.split('').reverse().join('')

  return strippedString.toLowerCase() == reversedString.toLowerCase()
}
