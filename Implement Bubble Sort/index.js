function bubbleSort(array) {
    let swap = true


    while (swap) {
        let noSwap = true
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let c = array[i]
                array[i] = array[i + 1]
                array[i + 1] = c
                noSwap = false
            }

        }
        if (noSwap) {
            swap = false
        }

    }
    return array;
    // Only change code above this line
}

console.log(bubbleSort([5, 2, 5, 3, 8, 3, 6, 9, 7, 1, 0, 3, 5, 88, 23, 69, 8, 120, 36, 74])) 