/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// public int climbStairs(int n) {
//   return climb_Stairs(0, n);
// }
// public int climb_Stairs(int i, int n) {
//   if (i > n) {
//       return 0;
//   }
//   if (i == n) {
//       return 1;
//   }
//   return climb_Stairs(i + 1, n) + climb_Stairs(i + 2, n);
// }

// @lc code=start
function climbStairs(n :number) :number {
  if(n < 2)
    return n;
  let dp = [];
  dp[0] = 1;
  dp[1] = 2;
  for(let i = 2; i < n; i++){
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n - 1];
};
// @lc code=end

