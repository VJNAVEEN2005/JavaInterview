//Best Time to Buy and Sell Stock

const prices = [7,1,5,3,6,4]

var maxProfit = function(prices) {
  let left = 0
  let righ = 1
  let maxProfitValue = 0
  
  while(righ<prices.length){
    if(prices[left]<prices[righ]){
        const profit = prices[righ]-prices[left]
        maxProfitValue = Math.max(profit,maxProfitValue)
    } else {
        left = righ
    }
    righ++
  }

  return maxProfitValue
};

console.log(maxProfit(prices))