/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 *
 * https://leetcode-cn.com/problems/reverse-string/description/
 *
 * algorithms
 * Easy (67.41%)
 * Likes:    166
 * Dislikes: 0
 * Total Accepted:    72.1K
 * Total Submissions: 106.7K
 * Testcase Example:  '["h","e","l","l","o"]'
 *
 * 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
 *
 * 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
 *
 * 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。
 *
 *
 *
 * 示例 1：
 *
 * 输入：["h","e","l","l","o"]
 * 输出：["o","l","l","e","h"]
 *
 *
 * 示例 2：
 *
 * 输入：["H","a","n","n","a","h"]
 * 输出：["h","a","n","n","a","H"]
 *
 */

// js api 解法
const reverseString1 = s => s.reverse()

// 双指针解法
const swap = (v, i, j) => {
  let temp = v[i]
  v[i] = v[j]
  v[j] = temp
}

const reverseString = s => {
  let left = 0
  let right = s.length - 1

  while (left < right) {
    swap(s, left, right)
    left++
    right--
  }
}
