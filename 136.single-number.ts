/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  // for (let i = 0; i < nums.length; i++) {
  //   let index = nums.indexOf(nums[i])
  //   let lastIndex = nums.lastIndexOf(nums[i])
  //   if (index === lastIndex) return nums[i]
  // }

  let ans: number = 0
  for (let i = 0; i < nums.length; i++) {
    ans ^= nums[i];
  }
  return ans

  // let ans: number = 0
  // let flag: boolean = true
  // for (let i = 0; i < nums.length; i++) {
  //   if (flag) ans += nums[i]
  //   if (!flag) ans -= nums[i]
  //   flag = !flag
  //   console.log(ans)
  // }
  // return ans
};
// @lc code=end

