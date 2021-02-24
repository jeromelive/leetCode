/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  if(x < 0 ) return false
  let temp: string[] = x.toFixed().split('')
  return temp.join('') === temp.reverse().join('')
};
// @lc code=end

