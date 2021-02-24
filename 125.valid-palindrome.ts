/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  let temp: string = s.replace(/[\W|_]/g, '').toLowerCase()
  return temp === temp.split('').reverse().join('')

  // let i: number = 0
  // let j: number = s.length - 1
  // while (i < j) {
  //   while (/[\W|_]/.test(s.charAt(i)) && s.charAt(i) !== undefined) i++
  //   while (/[\W|_]/.test(s.charAt(j)) && s.charAt(j) !== undefined) j--
  //   if (i < j && s.charAt(i).toLowerCase() !== s.charAt(j).toLowerCase()) return false
  //   i++
  //   j--
  // }
  // return true
};
// @lc code=end

