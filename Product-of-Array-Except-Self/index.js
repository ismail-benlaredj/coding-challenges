
const productExceptSelf = function (nums) {
    let prev = 1, currn = 1, answer = []
    for (let i = 1; i < nums.length + 1; i++) {
        for (let j = i; j < nums.length; j++) {
            currn *= nums[j]
        }
        currn *= prev
        answer.push(currn)
        prev = prev * nums[i - 1]
        currn = 1
    }
    return answer
}


console.log(productExceptSelf([1, 2, 3, 4])) // Answer = [24,12,8,6]