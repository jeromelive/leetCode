/*
 * @lc app=leetcode id=167 lang=typescript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
  // for (let i = 0; i < numbers.length; i++) {
  //   if (numbers[i] <= target) {
  //     let index: number = numbers.lastIndexOf(target - numbers[i])
  //     if (index !== -1) {
  //       return [i + 1, index + 1]
  //     }
  //   }
  // }
  // return []

  let i: number = 0
  let j: number = numbers.length - 1
  while (i < j) {
    if (numbers[i] + numbers[j] === target) return [i + 1, j + 1]
    if (numbers[i] + numbers[j] < target) i++
    if (numbers[i] + numbers[j] > target) j--
  }
  return []
};
// @lc code=end

