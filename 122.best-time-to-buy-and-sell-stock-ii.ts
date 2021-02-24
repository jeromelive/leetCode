/*
 * @lc app=leetcode id=122 lang=typescript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let maxPro: number = 0
  let curPrice: number | undefined
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1] && curPrice === undefined) {
      curPrice = prices[i]
    }
    if (prices[i + 1] > prices[i + 2] && curPrice !== undefined) {
      maxPro = maxPro + (prices[i + 1] - curPrice)
      curPrice = undefined
    }
    if (i === prices.length - 2 && curPrice !== undefined) {
      maxPro = maxPro + (prices[i + 1] - curPrice)
    }
  }
  return maxPro
};
// @lc code=end

