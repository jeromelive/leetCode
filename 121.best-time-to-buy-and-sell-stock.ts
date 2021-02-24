/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  // let arr :number[] = []
  // for(let i = 0; i < prices.length - 1; i++) {
  //   for(let j = i + 1; j < prices.length; j++) {
  //     arr.push(prices[j] - prices[i])
  //   }
  // }
  // return Math.max(...arr, 0)

  // let arr :number[] = []
  // let temp: number = 0
  // for(let i = 0; i < prices.length - 1; i++) {
  //   temp = Math.max(temp, arr[i + 1] - arr[i])
  // }

  // let minPrice :number
  // let maxPro :number = 0
  // for(let i = 0; i < prices.length; i++) {
  //   minPrice = minPrice === undefined ? prices[i] : Math.min(prices[i], minPrice)
  //   maxPro = Math.max(maxPro, prices[i] - minPrice)
  // }
  // return maxPro

  let maxSofar :number = 0
  let maxCur :number = 0
};
// @lc code=end

