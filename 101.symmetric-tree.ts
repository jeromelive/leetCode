/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
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
function isSymmetric(root: TreeNode | null): boolean {
  if(root === null) {
    return true
  }
  return isSymmetricTest(root.left, root.right)
}
function isSymmetricTest(left: TreeNode | null, right: TreeNode | null) :boolean {
  // if two nodes are null
  if(left === null && right === null)
    return true;
  // is one node is null, another is another
  if(left === null || right === null)
    return false;
  // if two nodes value are not same
  if(left.val !== right.val)
    return false;

  return isSymmetricTest(left.left, right.right) && isSymmetricTest(left.right, right.left);
}
// @lc code=end

