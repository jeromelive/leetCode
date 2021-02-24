/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  // let strs = s.split('')
  // let length = strs.length
  // if(length % 2) return false
  // let map = {
  //   '{': '}',
  //   '(': ')',
  //   '[': ']',
  // }
  // while(length) {
  //   let temp =  map[strs[0]]
  //   let indexOf = strs.indexOf(temp)
  //   if(temp && indexOf !== -1) {
  //     strs.splice(indexOf, 1)
  //     strs.shift()
  //     length = strs.length
  //   } else {
  //     return false
  //   }
  // }
  // return true
  if (s === null || s.length <= 0) return true;
  var cArr = s.split('');
  var stack = [];
  for (var c of cArr) {
      if (c === '[') stack.push(']');
      else if (c === '{') stack.push('}');
      else if (c === '(') stack.push(')');
      else if (stack.length === 0 || c !== stack.pop()) return false;
  }
  if (stack.length === 0) return true;
  return false;
};
// @lc code=end

