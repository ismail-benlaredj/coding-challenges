const dailyTemperatures = function (temperatures) {
    let res = new Array(temperatures.length).fill(0), stack = [], j, value, resIndex
    stack.push({
        index: 0,
        temp: temperatures[0]
    })
    for (let i = 1; i < temperatures.length; i++) {
        j = stack.length - 1
        while (stack.length > 0) {
            if (stack[j].temp < temperatures[i]) {
                value = i - stack[j].index
                resIndex = stack[j].index
                res[resIndex] = value
                stack.pop()
                j -= 1
                if (stack.length == 0) {
                    stack.push({
                        index: i,
                        temp: temperatures[i]
                    })
                    break
                }
            } else {
                stack.push({
                    index: i,
                    temp: temperatures[i]
                })
                break
            }
        }
    }
    return res
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])) // expected: [1,1,4,2,1,1,0,0]