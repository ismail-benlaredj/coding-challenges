

//BINARY SEARCH USING RECURSION
const search1 = function (nums, target) {
    let start = 0, end = nums.length - 1
    return recSearch(nums, target, start, end)

};
const recSearch = (nums, target, start, end) => {
    if (start >= end) {
        return -1
    }
    let mid = Math.floor((start + end) / 2)
    if (nums[mid] == target) {
        return mid
    }

    if (nums[mid] > target) {
        mid = mid - 1
        return recSearch(nums, target, start, mid)
    }
    if (nums[mid] < target) {
        mid = mid + 1
        return recSearch(nums, target, mid, end)
    }
}

// BINARY SEARCH USINING WHILE LOOP

const search2 = function (nums, target) {
    let start = 0, end = nums.length - 1, index = -1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (nums[mid] < target) {
            start = mid + 1
        } else if (nums[mid] > target) {
            end = mid - 1
        } else {
            return mid
        }
    }
    return index
};


console.log(search1([-1, 0, 3, 5, 9, 12], 9)) // EXPECTED 4