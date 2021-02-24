/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  if(a === '0') return b
  if(b === '0') return a
  let len = Math.max(a.length, b.length)
  let str1 = a.split('').reverse()
  let str2 = b.split('').reverse()
  let temp: number[] = []
  let flag: number = 0
  for(let i = 0; i < len; i++) {
    let num = Number(str1[i] || 0) + Number(str2[i] || 0) + flag
    if(num === 3) {
      temp.push(1)
      flag = 1
    } else if(num === 2) {
      temp.push(0)
      flag = 1
    } else if (num === 1) {
      temp.push(1)
      flag = 0
    } else {
      temp.push(0)
      flag = 0
    }
  }
  if(flag === 1) {
    temp.push(1)
  }
  return temp.reverse().join('')
};
// @lc code=end

