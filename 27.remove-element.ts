/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  while(nums.indexOf(val) !== -1) {
    nums.splice(nums.indexOf(val), 1)
  }
  return nums.length
  // let j = 0
  // for(let i = 0; i < nums.length; i++) {
  //   if(nums[i] !== val) {
  //     j++
  //   }
  // }
  // return j
};
// @lc code=end

