const isValid = (s) => {
    let stack = []
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (isOpen(s[i])) {
            let ele = s[i]
            stack.push(ele)
            count++
        } else if (checkType(stack[count - 1] + s[i])) {
            stack.pop()
            count--
        } else {
            return false
        }
    }
    if (stack.length > 0) return false
    return true
};

const checkType = (openClose) => {
    switch (openClose) {
        case '()':
            return true
        case '{}':
            return true
        case '[]':
            return true
        default:
            return false
    }
}
const isOpen = (c) => {
    switch (c) {
        case '(':
            return true
        case '{':
            return true
        case '[':
            return true
        default:
            return false
    }
}


console.log(isValid("({[()]})")) // true
//({[()]})
