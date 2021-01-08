/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 *
 * https://leetcode-cn.com/problems/copy-list-with-random-pointer/description/
 *
 * algorithms
 * Medium (38.86%)
 * Likes:    155
 * Dislikes: 0
 * Total Accepted:    14.7K
 * Total Submissions: 36.8K
 * Testcase Example:  '{"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}'
 *
 * 给定一个链表，每个节点包含一个额外增加的随机指针，该指针可以指向链表中的任何节点或空节点。
 *
 * 要求返回这个链表的深拷贝。
 *
 *
 *
 * 示例：
 *
 *
 *
 * 输入：
 *
 * {"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}
 *
 * 解释：
 * 节点 1 的值是 1，它的下一个指针和随机指针都指向节点 2 。
 * 节点 2 的值是 2，它的下一个指针指向 null，随机指针指向它自己。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 你必须返回给定头的拷贝作为对克隆列表的引用。
 *
 *
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
// TODO:
/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = function (head) {
  if (!head) {
    return null
  }
  const clones = new Map()
  let n = head

  while (n) {
    clones.set(n, new Node(n.val))
    n = n.next
  }

  n = head

  while (n) {
    clones.get(n).next = clones.get(n.next) || null
    clones.get(n).random = clones.get(n.random) || null
    n = n.next
  }

  return clones.get(head)
}
// @lc code=end
