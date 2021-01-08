/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */
/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = s => {
  const map = [
    '',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]

  let res = 0
  let len = s.length

  for (let c of s) {
    if (len > 1) {
      res += map.indexOf(c) * Math.pow(26, len - 1)
      len--
    } else {
      res += map.indexOf(c)
    }
  }

  return res
}
