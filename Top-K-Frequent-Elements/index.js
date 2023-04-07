// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// First Solution 
const topKFrequent = function (nums, k) {
    const map = new Map();
    const arr = []
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let count = map.get(nums[i])
            count += 1
            map.set(nums[i], count)
            let indexDup = arr.indexOf(nums[i])
            arr.splice(indexDup, 1)
            arr.push(nums[i])
        } else {
            map.set(nums[i], 1)
            arr.push(nums[i])
        }
    }
    let res = arr.sort((a, b) => map.get(b) - map.get(a))
    return res.slice(0, k)
};
// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
// console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2))
// console.log(topKFrequent([5, 3, 1, 1, 1, 3, 73, 1], 2))
console.log(topKFrequent([2, 3, 4, 1, 4, 0, 4, -1, -2, -1], 2))






