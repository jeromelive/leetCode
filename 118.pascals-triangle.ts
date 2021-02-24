/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
function generate(numRows: number): number[][] {
  const arr: number[][] = []
  for (let i = 0; i < numRows; i++) {
    let temp: number[] = []
    temp.push(1)
    let lastItem: number[] = arr[i - 1]
    if (!!lastItem) {
      for (let j = 0; j < lastItem.length - 1; j++) {
        temp.push(lastItem[j] + lastItem[j + 1])
      }
      temp.push(1)
    }
    arr.push(temp)
  }
  return arr
};
// @lc code=end

