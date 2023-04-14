

// good space and time complexity

const missingNumber = (nums) => {
    nums = nums.sort((a, b) => a - b)
    if (nums[0] != 0) {
        return 0
    }
    if (nums[nums.length - 1] != nums.length) {
        return nums.length
    }
    let check
    for (let i = 0; i < nums.length - 1; i++) {
        check = nums[i + 1] - nums[i]
        if (check > 1) {
            let missed = nums[i] + 1
            return missed
        }
    }
}


// the worst solution: space complexity, the best time complexity

// const missingNumber = (nums) => {
//     const map = new Map(nums.map((elem, i) => [elem, i]));
//     for (let i = 0; i <= nums.length; i++) {
//         if (!map.has(i)) {
//             return i
//         }
//     }
// }


// the worst solution: time complexity  best solution: space complexity

// const missingNumber = (nums) => {
//     for (let i = 0; i <= nums.length; i++) {
//         if (nums.indexOf(i) == -1) {
//             return i
//         }
//     }
// }

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])) //expect 8
