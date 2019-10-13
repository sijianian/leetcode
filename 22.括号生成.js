/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = n => {
  const res = []
  const fn = (str, l, r) => {
    if (l === n && r === n) {
      res.push(str)
      return
    }

    if (l < n) {
      fn(`${str}(`, l + 1, r)
    }

    if (l > r) {
      fn(`${str})`, l, r + 1)
    }
  }

  fn('', 0, 0)

  return res
}
