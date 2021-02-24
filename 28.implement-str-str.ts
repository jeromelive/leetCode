/*
 * @lc app=leetcode id=28 lang=typescript
 *
 * [28] Implement strStr()
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  if(needle.length === 0) return 0
  for(let i = 0; i < haystack.length; i++) {
    if(haystack[i] === needle[0] && haystack.substr(i, needle.length) === needle) {
      return i
    }
  }
  return -1
};
// @lc code=end

