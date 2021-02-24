/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  // let arr :number[]
  // const LENGTH :number = nums.length
  // for(let i = 0; i < LENGTH; i++) {
  //   if(i === LENGTH - 1) {
  //     return []
  //   } else {
  //     arr = []
  //     let temp = target - nums[i]
  //     for(let j = i + 1; j < LENGTH; j++) {
  //       if(nums[j] === temp) {
  //         return [i, j]
  //       }
  //     }
  //   }
  // }
  console.log(1)

  const LENGTH :number = nums.length
  for(let i = 0; i < LENGTH; i++) {
    if(i === LENGTH - 1) {
      return []
    } else {
      let temp = nums.lastIndexOf(target - nums[i])
      if(temp !== i && temp >= 0) {
        return [i, temp]
      }
    }
  }
};
// @lc code=end

