/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 *
 * https://leetcode-cn.com/problems/permutation-sequence/description/
 *
 * algorithms
 * Medium (47.57%)
 * Likes:    153
 * Dislikes: 0
 * Total Accepted:    19.7K
 * Total Submissions: 41.2K
 * Testcase Example:  '3\n3'
 *
 * 给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。
 *
 * 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：
 *
 *
 * "123"
 * "132"
 * "213"
 * "231"
 * "312"
 * "321"
 *
 *
 * 给定 n 和 k，返回第 k 个排列。
 *
 * 说明：
 *
 *
 * 给定 n 的范围是 [1, 9]。
 * 给定 k 的范围是[1,  n!]。
 *
 *
 * 示例 1:
 *
 * 输入: n = 3, k = 3
 * 输出: "213"
 *
 *
 * 示例 2:
 *
 * 输入: n = 4, k = 9
 * 输出: "2314"
 *
 *
 */
// TODO:
// @lc code=start
const getFactorial = function (n) {
  if (n === 1) {
    return n
  } else if (n > 1) {
    return n * getFactorial(n - 1)
  }
}

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = function (n, k) {
  let res = []
  let arr = []

  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }

  let n2 = n

  for (let i = 0; i < n2; i++) {
    let nf = getFactorial(n - 1)
    let x = Math.ceil(k / nf) - 1

    res.push(arr.splice(x, 1)[0])

    k -= x * nf
    n = n - 1
  }

  return res.join('')
}
// @lc code=end
