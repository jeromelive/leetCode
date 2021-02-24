/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === target) {
      return i
    }
    if(nums[i] < target && (nums[i+1] > target || nums[i+1] === undefined)) {
      return i + 1
    }
  }
  return 0
};
// @lc code=end

