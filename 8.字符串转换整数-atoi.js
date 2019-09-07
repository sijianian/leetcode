/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */
/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = str => {
  const result = str.trim().match(/^(-|\+)?\d+/g)

  return result
    ? Math.max(
        Math.min(Number(result[0]), Math.pow(2, 31) - 1),
        Math.pow(-2, 31)
      )
    : 0
}
