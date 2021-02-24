/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // if(n === 0) return nums1
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < nums1.length; j++) {
      if(nums1[j] <= nums2[i]) {
        nums1.splice(j + 1, 0, nums2[i])
      }
    }
  }
  // return nums1
  // console.log(nums1)
};
// @lc code=end

