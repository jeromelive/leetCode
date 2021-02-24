/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  // let arr: number[] = []
  // for(let i = 0; i < nums.length; i++) {
  //   for(let j = i + 1; j <= nums.length; j++) {
  //     let temp = nums.slice(i, j)
  //     let sum = 0
  //     for (let n = 0; n < temp.length; n++) {
  //       sum+=sum[n]
  //     }
  //     arr.push(sum)
  //   }
  // }
  // return Math.max(...arr)

  // let len = nums.length;
  // if(len === 0) return 0
  // let segmentSum = nums[0];
  // let res = nums[0];
  // for (let i = 1; i < len; i++) {
  //   segmentSum = Math.max(nums[i], segmentSum + nums[i]);
  //   res = Math.max(res, segmentSum);
  // }
  // return res;
};
// @lc code=end

