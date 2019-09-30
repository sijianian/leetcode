/*
 * @lc app=leetcode.cn id=371 lang=javascript
 *
 * [371] 两整数之和
 *
 * https://leetcode-cn.com/problems/sum-of-two-integers/description/
 *
 * algorithms
 * Easy (51.68%)
 * Likes:    147
 * Dislikes: 0
 * Total Accepted:    15.9K
 * Total Submissions: 30.6K
 * Testcase Example:  '1\n2'
 *
 * 不使用运算符 + 和 - ​​​​​​​，计算两整数 ​​​​​​​a 、b ​​​​​​​之和。
 *
 * 示例 1:
 *
 * 输入: a = 1, b = 2
 * 输出: 3
 *
 *
 * 示例 2:
 *
 * 输入: a = -2, b = 3
 * 输出: 1
 *
 */
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  let carry

  while (b) {
    // 记录 a+b 的进位，直到进位为0是退出
    carry = (a & b) << 1

    //结果相加
    a ^= b

    // 循环
    b = carry
  }

  return a
}
