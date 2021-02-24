/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  if (nums.length == 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;

  // let i = 0
  // while (i < nums.length) {
  //   let num = nums[i]
  //   while(i !== nums.lastIndexOf(num)) {
  //     nums.splice(nums.lastIndexOf(num), 1)
  //   }
  //   i++
  // }
  // return nums.length
};
// @lc code=end

