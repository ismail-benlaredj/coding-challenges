
const twoSum = (numbers, target) => {
    let right = numbers.length - 1, left = 0, sum
    while (true) {
        sum = numbers[left] + numbers[right]
        if (sum === target) {
            return [left + 1, right + 1]
        } else if (sum < target) {
            left += 1
        } else {
            right -= 1
        }
    }
}

// console.log(twoSum([2, 3, 4], 6)) // expected [1,3]
console.log(twoSum([-5, -2, -1, 0, 2, 3, 6, 7], 5)) // expected [2,8]

// BRUTE FORCE SOLUTION

// var twoSum = function (numbers, target) {
//     const arrLen = numbers.length
//     let sum, maxIndex = arrLen - 1, minIndex = 0

//     for (let i = 0; i < arrLen - 1; i++) {
//         for (let j = i + 1; j < arrLen; j++) {
//             sum = numbers[i] + numbers[j]
//             if (sum > target) break
//             if (sum === target) {
//                 return [i + 1, j + 1]
//             }
//         }
//     }

// };



