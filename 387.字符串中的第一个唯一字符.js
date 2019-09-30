/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 *
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (40.01%)
 * Likes:    147
 * Dislikes: 0
 * Total Accepted:    43.5K
 * Total Submissions: 106.9K
 * Testcase Example:  '"leetcode"'
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 *
 * 案例:
 *
 *
 * s = "leetcode"
 * 返回 0.
 *
 * s = "loveleetcode",
 * 返回 2.
 *
 *
 *
 *
 * 注意事项：您可以假定该字符串只包含小写字母。
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = s => {
  const hash = {}
  let minIndex = null
  let i = 0

  while (i < s.length) {
    if (hash[s[i]] || hash[s[i]] === 0) {
      hash[s[i]]++
    } else {
      hash[s[i]] = 0
    }

    i++
  }

  while (i-- > 0) {
    if (!hash[s[i]]) {
      minIndex = i
    }
  }

  if (minIndex === null) {
    return -1
  }

  return minIndex
}
