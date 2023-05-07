const threeSum = (nums) => {
    let res = [], sum
    nums.sort((a, b) => (a - b))
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > 0) break
        if (nums[i] === nums[i - 1]) continue
        let left = i + 1, right = nums.length - 1,
            one = nums[i]
        while (left < right) {
            sum = one + nums[left] + nums[right]
            if (sum === 0) {
                res.push([one, nums[left], nums[right]])
                while (nums[left] == nums[left + 1]) {
                    left += 1
                }
                left += 1
            } else if (sum < 0) {
                left += 1
            } else {
                right -= 1
            }
        }
    }
    return res
};

// console.log(threeSum([-1, 0, 1, 0])) // [-1,0,0,1] output: [[-1, 0, 1]]
console.log(threeSum([0, 0, 0, 0, 0, 0])) // output: [[0,0,0]]
console.log(threeSum([-1, 0, 1, 2, -1, -4])) // output: [[-1,-1,2],[-1,0,1]]
//[-4,-1,-1,0,1,2]
