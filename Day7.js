// Valid Anagram

const s = "anagram"
const t = "nagaram"

var isAnagram1 = function(s, t) {
    return s.split("").sort().join("") === t.split("").sort().join("")
};

var isAnagram = function(s, t) {

    if(s.length !== t.length) return false

    const arr = Array(26).fill(0)

    s.split("").forEach(element => {
        arr[element.charCodeAt(0) - 97]++
    });

    t.split("").forEach(element => {
        arr[element.charCodeAt(0) - 97]--
    });

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0) return false
    }

    return true

};

console.log(isAnagram(s,t))