const searchMatrix = (matrix, target) => {
    let left = 0, right = matrix.length - 1, mid, row = []
    let index = matrix[0].length - 1
    while (left <= right) {
        mid = Math.floor((right + left) / 2)
        if (matrix[mid][0] == target || matrix[mid][index] == target) {
            return true
        }
        if (matrix[mid][0] < target && matrix[mid][index] > target) {
            row = matrix[mid]
            break
        } else if (matrix[mid][index] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    left = 1, right = row.length - 2
    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        if (row[mid] < target) {
            left = mid + 1
        } else if (row[mid] > target) {
            right = mid - 1
        } else {
            return true
        }
    }
    return false
};



console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 34))
// matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13 => false