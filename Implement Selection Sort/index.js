
function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let min = array[i]
        let index = i
        for (let j = i; j < array.length; j++) {
            if (min > array[j]) {
                min = array[j]
                index = j
            }
        }
        if (array[i] > min) {
            array[index] = array[i]
            array[i] = min
        }
    }
    return array;
}

console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))