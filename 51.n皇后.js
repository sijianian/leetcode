/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 *
 * https://leetcode-cn.com/problems/n-queens/description/
 *
 * algorithms
 * Hard (66.87%)
 * Likes:    274
 * Dislikes: 0
 * Total Accepted:    19.7K
 * Total Submissions: 29.5K
 * Testcase Example:  '4'
 *
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 *
 *
 *
 * 上图为 8 皇后问题的一种解法。
 *
 * 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。
 *
 * 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 *
 * 示例:
 *
 * 输入: 4
 * 输出: [
 * ⁠[".Q..",  // 解法 1
 * ⁠ "...Q",
 * ⁠ "Q...",
 * ⁠ "..Q."],
 *
 * ⁠["..Q.",  // 解法 2
 * ⁠ "Q...",
 * ⁠ "...Q",
 * ⁠ ".Q.."]
 * ]
 * 解释: 4 皇后问题存在两个不同的解法。
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function (n) {
  const res = []

  backtrack(res, n, [], 0)

  return res
}

function backtrack(res, n, board = [], r = 0) {
  if (r === n) {
    res.push(board.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)))
    return
  }
  for (let c = 0; c < n; c++) {
    if (
      !board.some((bc, br) => {
        return bc === c || bc === c + r - br || bc === c - r + br
      })
    ) {
      board.push(c)
      backtrack(res, n, board, r + 1)
      board.pop()
    }
  }
}
// @lc code=end
