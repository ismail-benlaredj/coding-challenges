const nextNum = (num) => {
    let n = num.toString(), index = -1, swap1, swap2
    for (let i = n.length - 1; i > 0; i--) {
        if (i <= index) break
        for (let j = i - 1; j > -1; j--) {
            if (parseInt(n[i]) > parseInt(n[j])) {
                if (index < j) {
                    swap1 = i
                    swap2 = j
                    index = j
                    break
                }
            }
        }
    }
    if (!swap1) return - 1
    let str1 = replaceChar(n, swap1, n[swap2])
    let str2 = replaceChar(str1, swap2, n[swap1])
    let minRes = str2.slice(index + 1)
    let arr = minRes.split('')
    arr.sort()
    minRes = arr.join('')
    let res = parseInt(str2.slice(0, index + 1) + minRes)

    if (index > -1) {
        return res
    }
    return -1
}
const replaceChar = (string, index, replacement) => {
    return (
        string.slice(0, index) +
        replacement +
        string.slice(index + replacement.length)
    );
}

console.log(nextNum(153)) //=> 315

