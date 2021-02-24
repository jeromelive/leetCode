/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if(strs.length === 0) return ''
  let prefix = strs[0]
  for(let i = 1; i < strs.length; i++) {
    while(strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substr(0, prefix.length - 1)
    }
  }
  return prefix
};
// @lc code=end

