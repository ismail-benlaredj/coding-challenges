
const maxProfit = (prices) => {
    let max = 0, left = 0, right = 1, maxI = 0
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            maxI = prices[right] - prices[left]
            max = Math.max(max, maxI)
        } else {
            left = right
        }
        right += 1
    }
    return max
}


console.log(maxProfit([7, 1, 5, 3, 6, 4]))
// console.log(maxProfit([7, 6, 4, 3, 1]))
// console.log(maxProfit([7, 6, 4, 3, 20]))



//NOT EFFICIENT SOLUTION

// const maxProfit = (prices) => {
//     let max = 0
//     for (let i = 0; i < prices.length; i++) {
//         let maxI = Math.max(...prices.slice(i + 1)) - prices[i]
//         if (maxI > max) max = maxI
//     }
//     return max
// };

