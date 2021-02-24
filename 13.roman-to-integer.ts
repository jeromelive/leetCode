/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
  let obj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let arr: string[] = s.split('')
  let temp: number[] = []
  for(let i = 0; i < arr.length; i++) {
    let curr = obj[arr[i]]
    let next = obj[arr[i+1]]
    if(i === arr.length - 1) {
      temp.push(curr)
    } else {
      temp.push(curr < next ? -1 * curr : curr)
    }
  }
  return temp.reduce((total, curr) => {return total + curr}, 0)
};
// @lc code=end

