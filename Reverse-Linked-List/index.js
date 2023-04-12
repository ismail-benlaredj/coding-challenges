
const reverseList = (head) => {
    let current = head, next = null, prev = null
    while (current) {
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
}

const recurciveReverseList = (head) => {
    if (!head?.next) return head

    let prev = recurciveReverseList(head.next)


}
