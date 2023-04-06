//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]


// Solution 2
const twoSum = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const value = target - nums[i]
        if (map.has(value)) return [map.get(value), i]
        map.set(nums[i], i)
    }
};

// console.log(twoSum([2, 7, 11, 15], 9))
// console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([0, 4, 3, 0], 0))
console.log(twoSum([-1, -2, -3, -4, -5], -8))









// FIRST SOLUTION
const twoSum1 = (nums, target) => {
    let arr = []
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j]
        }
    }
    return arr
};

// console.log(twoSum1([2, 7, 11, 15], 9))