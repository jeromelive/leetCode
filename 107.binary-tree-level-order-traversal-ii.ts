/*
 * @lc app=leetcode id=107 lang=typescript
 *
 * [107] Binary Tree Level Order Traversal II
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

function levelOrderBottom(root: TreeNode | null): number[][] {
  let arr :number[][] = []
  if(root === null) return []
  leveOrderBottomTest(arr, root, 1)
  return arr
  // if (!root) return []
  // const result = [], queue = []
  // queue.push(root)

  // while (queue.length) {
  //   const len = queue.length
  //   const level = []

  //   for (let i = 0; i < len; i++) {
  //     const top = queue.shift()
  //     level.push(top.val)

  //     if (top.left) queue.push(top.left)
  //     if (top.right) queue.push(top.right)
  //   }

  //   result.unshift(level)
  // }

  // return result
};

function leveOrderBottomTest(arr :number[][], root: TreeNode | null, index: number) {
  if(arr.length < index) {
    arr.unshift([])
  }
  arr[arr.length - index].push(root.val)
  root.left && leveOrderBottomTest(arr, root.left, index + 1)
  root.right && leveOrderBottomTest(arr, root.right, index + 1)
}
// @lc code=end

