/*
 * @lc app=leetcode id=104 lang=typescript
 *
 * [104] Maximum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
let num :number = 1
function maxDepth(root: TreeNode | null): number {
  if(root === null) return 0
  return count(num, root.left, root.right)
};

function count(num :number, left: TreeNode | null, right: TreeNode | null): number {
  if(left === null && right === null) return num
  num++
  return Math.max(
    count(num, left ? left.left : null, left ? left.right: null),
    count(num, right ? right.left : null, right ? right.right : null)
  )
}
// @lc code=end

