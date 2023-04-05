
// s = "anagram", t = "nagaram"
// s = "rat", t = "car";

const isAnagram = (s, t) => {
    if (s.length != t.length) return false
    s = [...s]
    t = [...t]
    s.sort()
    t.sort()
    return s.toString() === t.toString()
};

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "car"))
console.log(isAnagram("aacc", "ccac"))