const arr1 = [1, 2, 3, 1, 3, 4, 5, 6, 2] //true
const arr2 = [1, 2, 3, 4] //false

const containsDuplicate = (arr) => {
    let ob = {}
    for (let i = 0; i < arr.length; i++) {
        if (ob[arr[i]] !== undefined) return true
        ob[arr[i]] = arr[i]
    }
    return false
}


console.log(containsDuplicate(arr1))
console.log(containsDuplicate(arr2))