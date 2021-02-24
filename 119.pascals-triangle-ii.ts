/*
 * @lc app=leetcode id=119 lang=typescript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
  let arr: number[][] = []
  for (let i = 0; i <= rowIndex; i++) {
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
  return arr.pop()
};
// @lc code=end

