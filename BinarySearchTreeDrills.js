const BinarySearchTree = require('./BinarySearchTreeClass')

/*
Max profit
The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the company on a particular day, and sell the shares on a subsequent day, write an algorithm to work out what the maximum profit you could make would be.
*/

function maxProfit(priceArr){
    let buyPhase = true
    let buyPrice = 0
    let profit = 0
    let i = 0
    while (i < priceArr.length - 1){
        let todayPrice = priceArr[i]
        let tomorrowPrice = priceArr[i + 1]
        if (buyPhase && todayPrice < tomorrowPrice){
            buyPrice = todayPrice
            buyPhase = false
        } else if (!buyPhase && tomorrowPrice < todayPrice){
            profit = profit + (todayPrice - buyPrice)
            buyPhase = true
        }
        i++
    }

    if (!buyPhase){
        profit = profit + (priceArr[i] - buyPrice)
    }
    return profit
}