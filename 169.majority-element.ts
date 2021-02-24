/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  let arr: number[] = new Array(Math.max(...nums))
  arr.fill(0)
  for (let i = 0; i < nums.length; i++) {
    let temp: number = arr[nums[i]] || 0
    arr[nums[i]] = ++temp
  }
  console.log(arr)
  return arr.indexOf(Math.max(...arr))
};
// @lc code=end

