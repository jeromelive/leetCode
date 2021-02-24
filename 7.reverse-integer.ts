/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
function reverse(x: number): number {
  let f  = x > 0 ? 1 : -1
  x = parseFloat(Math.abs(x).toFixed().split('').reverse().join(''))
  return x < Math.pow(-2, 31) || x > Math.pow(2, 31) - 1 ? 0 :  f * x
};
// @lc code=end

