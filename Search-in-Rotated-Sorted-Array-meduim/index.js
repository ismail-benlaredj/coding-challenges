// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

const search = function (nums, target) {
    const index = nums.indexOf(target)
    if (index != -1) return index
    return -1
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0))